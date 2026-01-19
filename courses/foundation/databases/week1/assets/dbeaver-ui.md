# Dbeaver UI details

## Create a New SQLite Connection

1. Click the **"New Database Connection"** button (plug icon) in the toolbar or `Ctrl+Shift+N`
   ![](./dbeaver-screenshots/create%20new%20connection.png)
2. Select **SQLite** from the list of databases
   ![](./dbeaver-screenshots/choose%20sqlite.png)
3. Click **Next**
4. In the **Path** field, click **Browse** and choose where to save your database file
   ![](./dbeaver-screenshots/create%20save%20path.png)
5. Name your database file: `tasks.sqlite3` **EXTENTION IS IMPORTANT**
6. Click **Test Connection** to verify everything works
7. Click **Finish**

## Browse through database

![](./dbeaver-screenshots/database%20view.png)

## Create and run queries

Open a new SQL script to write your queries in.
![](./dbeaver-screenshots/new%20sql%20script.png)

When running queries it is important to remember few things:
![](./dbeaver-screenshots/run%20queries.png)

1. Orange triangle will only **run the selected query**.
2. Little document with triangle will **run the entire script file**.
3. **Query is selected** when it is **manually selected** or **the cursor is standing on the query**.
4. **Always remember to end queries with semi-colon**: `;`! Otherwise the edit does not know when query ends!

## Errors will be marked

In case of errors, DBMS will mark them red. If you hover on the error, **DBMS will tell you the exact issue with your query**!
![](./dbeaver-screenshots/errors%20will%20be%20marked.png)

## Saving queries for homework

When done with queries, save them to your homework repo using this "Save As" like from any other software. Remember the `.sql` extention!
![](./dbeaver-screenshots/save%20queries%20for%20homework%20.png)
