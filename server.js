//dependencies
var mongoose = require("mongoose");
//initialize Express app
var express = require("express");
var app = express();
var db = require("./models");

//connecting to MongoDB
//mongoose.connect("mongodb://localhost/smart_app");
// const MONGODB_URI = "mongodb://localhost/finalProject";

//Create localhost port
var port = process.env.PORT || 3001;


mongoose.connect("mongodb://localhost/finalProject")
.then(function() {
  console.log('connected')

}).catch(err => console.log(err))
// Add value to collection 
// let words = 
//    ["accuracy","ambition","anarchy","Anathema","anathema","anime","Annika","API","aplustre","apophenia","apricity","armageddon","automagical","awesome","bailiwick","baker","balistraria","BB-8","beautiful","besmirch","bilby","biz","bloom","board game","bobbasheely","Brookdale","bumf","burrito","butter","butts","calamity","callipygian","cattywampus","Certainty","chortle","circle-squarer","cogitation","companion","conception","Context","convergent homonym","corody","countenance","creek","cromulent","curious","day","debugger","design","dionysian","document","documentation","dodecaphonic","doodles","doppelganger","dot","dragon","Dryad","dungeon","ecovillage","editor","emoji","emotion","empathy","enablement","equilibrium","evasion","experience","experiment","explore","family","fanfic","fernal","firewall","flummox","footle","forgiveness","foudroyant","Fritinancy","fuck","gay","gestalt","giantess","gorgeous","grawlix","hammered","harper","Hausa","idiolect","impeach","impeccable","Impetus","indexer","indigenous","internecine","interpreter","interrobang","jane","janky","jargon","joy","kankedort","Kaufmeister","kerfuffle","kindle","kompromat","kong","lapine","Laurify","lemniscate","librarian","library","like","limerick","literonic","llama","logocopia","logophilia","Love","Luck","maffick","medemmah","medieval","merit","metaphor","miscellaneous","multiplicative","name","nap","native","nerd","nihilist","nonsense","numinous","nychthemeron","obviate","occude","omer","oxymoron","palinode","panentheism","penumbra","Perked Up and down","Perked Up and down","Perspect","photographer","pizza","play","Prism-Equus","prosehaven","Protection","provoke","queen","quiddity","quincunx","quixotic","rain","recalcitrant","reframe","resister","root cause","sassitude","sauna","schadenfreude","Schnitzelbank","scrid","sex toys","shitdo","silly","skeleton","Sklodowska","skosh","smite","specious","spew","spleen","stigmergy","stound","sumption","Sustainability","tablet","tech","teleolexical","textfiles","the","therapeutic","thumosity","toponymy","toy","tourbillion","twitter","typography","ucalegon","unaffiliated","unorderly","wayzgoose","Weeki Wachee","weltschmerz","womansplain","wombat","wordo","xoxo"]

let words = ['root']
  



mongoose.connect("mongodb://localhost/finalProject", function(err) {
  if(err) throw err; 
  console.log('Successfully connected');
});

// let newWords = new Words(words)
// newWords.save()
// .then(() => {
//   console.log("save");
// }).catch(err => console.log(err))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/words', function(req, res) {
  console.log('connected')
  db.Words.find({},(err,data)=>{
    res.json(data)
  })

})



// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("Connected to Mongoose!");
// });

// app.use(express.static(process.cwd() + "/src"));

// app.get('/cardFlip', function(req, res) {
//   db.getConnection.find({})
//   .then(function(finalProject) {
//     res.json(finalProject)
//     console.log(res)
//   })
//   .catch(function(err) {
//     // If an error occurs, send the error back to the client
//     res.json(err);
//   });
// })

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
