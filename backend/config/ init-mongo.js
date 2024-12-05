db.createUser({
    user: "root",
    pwd: "rootpassword",
    roles: [{ role: "root", db: "admin" }]
});
  
db.createUser({
  user: "appUser",
  pwd: "password123",
  roles: [
      {
          role: "readWrite",
          db: "gen_care"
      }
  ]
});
  
db.createCollection('sampleCollection');