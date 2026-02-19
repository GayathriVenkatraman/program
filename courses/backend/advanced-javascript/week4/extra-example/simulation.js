export class Animal {
  constructor(x, y, speed, worldWidth, worldHeight) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.angle = Math.random() * Math.PI * 2;
  }

  move() {
    this.angle += (Math.random() - 0.5) * 0.5;
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    // Walk through edges to the other side
    this.x = ((this.x % this.worldWidth) + this.worldWidth) % this.worldWidth;
    this.y =
      ((this.y % this.worldHeight) + this.worldHeight) % this.worldHeight;
  }
}

export class Rabbit extends Animal {
  constructor(x, y, cooldown, worldWidth, worldHeight) {
    super(x, y, 2, worldWidth, worldHeight);
    this.cooldown = 0;
    this.maxCooldown = cooldown;
  }

  update() {
    this.move();
    if (this.cooldown > 0) this.cooldown--;
  }

  canReproduce() {
    return this.cooldown === 0;
  }

  reproduce() {
    this.cooldown = this.maxCooldown;
  }
}

export class Fox extends Animal {
  constructor(x, y, maxHunger, worldWidth, worldHeight) {
    super(x, y, 2.5, worldWidth, worldHeight);
    this.hunger = 0;
    this.maxHunger = maxHunger;
  }

  update() {
    this.move();
    this.hunger++;
  }

  isStarving() {
    return this.hunger >= this.maxHunger;
  }

  hungerLevel() {
    return Math.min(1, this.hunger / this.maxHunger);
  }

  eat() {
    this.hunger = 0;
  }
}

export class Universe {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.rabbits = [];
    this.foxes = [];
    this.stepCount = 0;
    this.catchDistance = 12;
    this.mateDistance = 25;
    this.mateCooldown = 50;
    this.foxHunger = 150;
    this.maxRabbits = 500;
    this.spontaneous = 0.02;
  }

  populate(rabbitCount, foxCount) {
    for (let i = 0; i < rabbitCount; i++) {
      this.rabbits.push(
        new Rabbit(
          Math.random() * this.width,
          Math.random() * this.height,
          this.mateCooldown,
          this.width,
          this.height,
        ),
      );
    }
    for (let i = 0; i < foxCount; i++) {
      this.foxes.push(
        new Fox(
          Math.random() * this.width,
          Math.random() * this.height,
          this.foxHunger,
          this.width,
          this.height,
        ),
      );
    }
  }

  distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  moveAll() {
    this.rabbits.forEach((r) => r.update());
    this.foxes.forEach((f) => f.update());
  }

  hunt() {
    const eatenRabbits = [];
    const newFoxes = [];

    this.foxes.forEach((fox) => {
      // Keep at least one rabbit alive
      if (this.rabbits.length - eatenRabbits.length <= 1) return;

      const prey = this.rabbits.find(
        (r) =>
          !eatenRabbits.includes(r) &&
          this.distance(fox, r) < this.catchDistance,
      );
      if (!prey) return;

      eatenRabbits.push(prey);
      fox.eat();
      const child = new Fox(
        fox.x,
        fox.y,
        this.foxHunger,
        this.width,
        this.height,
      );
      child.angle = fox.angle + Math.PI;
      newFoxes.push(child);
    });

    this.rabbits = this.rabbits.filter((r) => !eatenRabbits.includes(r));
    this.foxes.push(...newFoxes);
  }

  starve() {
    const alive = this.foxes.filter((fox) => !fox.isStarving());
    // Keep at least one fox alive
    this.foxes = alive.length > 0 ? alive : [this.foxes[0]];
  }

  reproduce() {
    if (this.rabbits.length >= this.maxRabbits) return;

    const babies = [];
    this.rabbits.forEach((a) => {
      if (!a.canReproduce()) return;
      const mate = this.rabbits.find(
        (b) =>
          b !== a &&
          b.canReproduce() &&
          this.distance(a, b) < this.mateDistance,
      );
      if (!mate) return;

      const awayAngle = Math.atan2(mate.y - a.y, mate.x - a.x);
      a.angle = awayAngle + Math.PI;
      mate.angle = awayAngle;
      a.reproduce();
      mate.reproduce();
      babies.push(
        new Rabbit(
          (a.x + mate.x) / 2,
          (a.y + mate.y) / 2,
          this.mateCooldown,
          this.width,
          this.height,
        ),
      );
    });

    this.rabbits.push(...babies);

    // Spontaneous reproduction: small random chance per step
    if (
      this.rabbits.length < this.maxRabbits &&
      Math.random() < this.spontaneous
    ) {
      const parent =
        this.rabbits[Math.floor(Math.random() * this.rabbits.length)];
      this.rabbits.push(
        new Rabbit(
          parent.x,
          parent.y,
          this.mateCooldown,
          this.width,
          this.height,
        ),
      );
    }
  }

  step() {
    this.stepCount++;
    this.moveAll();
    this.hunt();
    this.starve();
    this.reproduce();
  }
}
