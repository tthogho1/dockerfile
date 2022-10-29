use admin
db.createUser({user:"admin", pwd:"mongo", roles:["root"]})

use webcom
db.createUser(
  {
    user: "webcom",
    pwd: "webcom",
    roles:[
       {role:"readWrite",  db:"webcom"}
    ]
  }
)
