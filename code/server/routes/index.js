var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var User = mongoose.model('User');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/recommendations', function(req, res) {
  res.json([{"id":854,"title":"Stealing Cinderella","artist":"Chuck Wicks","preview_url":"https://p.scdn.co/mp3-preview/01bc21118f61bd7f936aca240cc16262ffc4e9eb","image_small":"https://i.scdn.co/image/d1f58701179fe768cff26a77a46c56f291343d68","image_medium":"https://i.scdn.co/image/d6655639cf2a2360c9f7361b518677134aebaa0b","image_large":"https://i.scdn.co/image/9ce5ea93acd3048312978d1eb5f6d297ff93375d","open_url":"https://open.spotify.com/track/0Pvbr31U9bjdvUUNGNFnQJ"},{"id":5063,"title":"Venom - Original Mix","artist":"Ziggy","preview_url":"https://p.scdn.co/mp3-preview/ab523442b9c36d118eb6f5f09f89026753a59160","image_small":"https://i.scdn.co/image/1a4ba26961c4606c316e10d5d3d20b736e3e7d27","image_medium":"https://i.scdn.co/image/82f862fa8d321ade52de3e98ca22cac9cd504540","image_large":"https://i.scdn.co/image/91a396948e8fc2cf170c781c93dd08b866812f3a","open_url":"https://open.spotify.com/track/2rep3dukoRQH9Qm7oFB6tV"},{"id":6265,"title":"Do It","artist":"Rootkit","preview_url":"https://p.scdn.co/mp3-preview/5c7cd8a7a50cebb973c17e5bdad61e189ae96b23","image_small":"https://i.scdn.co/image/398df9a33a6019c0e95e3be05fbaf19be0e91138","image_medium":"https://i.scdn.co/image/e6b0367bcf8009eff8a2ddd9ca274d0a8e644e88","image_large":"https://i.scdn.co/image/4e47ee3f6214fabbbed2092a21e62ee2a830058a","open_url":"https://open.spotify.com/track/1xtBz2pENDebC0W0w5p6bK"},{"id":1573,"title":"Shot For Me","artist":"Drake","preview_url":"https://p.scdn.co/mp3-preview/995bed20c9c2d5d867812f4f718d5d93511a9b2f","image_small":"https://i.scdn.co/image/dbb00fecfe4bbf2634cb0223ebe03a19ea974118","image_medium":"https://i.scdn.co/image/e2a67c48971991b49f3d1f69378e63d8ebf7bd9a","image_large":"https://i.scdn.co/image/c3c7d2a6c95b09c7d16c260efe6d42c1ddeda5db","open_url":"https://open.spotify.com/track/00cp5IMaH68tKnCd9nnMue"},{"id":5354,"title":"Or Nah (feat. Wiz Khalifa and DJ Mustard)","artist":"Ty Dolla $ign","preview_url":"https://p.scdn.co/mp3-preview/f5295dcb4fa0ce7fd81027695ff08834c1936907","image_small":"https://i.scdn.co/image/74b3e6a9c9ae1314b910dcdbcd71fb051a38657d","image_medium":"https://i.scdn.co/image/9bc81d37b1fefc58c74e7e1bd489d6ca5b7681ca","image_large":"https://i.scdn.co/image/f66dbe60bbd62c1da97d2c5f4843fc0b77a66044","open_url":"https://open.spotify.com/track/2LX9coJz8pfFHb8AaoVhXS"},{"id":5372,"title":"Drop That #NaeNae","artist":"We Are Toonz","preview_url":"https://p.scdn.co/mp3-preview/2f8dd382ac5d79c84b389afdeb6e532f419480f5","image_small":"https://i.scdn.co/image/ded1952f4d9651d50627cc06cf2a8f27140ccd53","image_medium":"https://i.scdn.co/image/a15193a0bca3bdd76e0652c981a6aaea4681f9fd","image_large":"https://i.scdn.co/image/48df17f1eb0269fd79e70c12f831a7cd44f99062","open_url":"https://open.spotify.com/track/2jFuY6jKcu9BNIxeOd0Ftp"},{"id":1805,"title":"Ruby","artist":"Kaiser Chiefs","preview_url":"https://p.scdn.co/mp3-preview/ee56cb2e0f4db639542b715bffaaf3645da08633","image_small":"https://i.scdn.co/image/9a247be48329427d9fa53f839963d037f12d7587","image_medium":"https://i.scdn.co/image/ea092a6ef873a9686cfc88b780b94d253a0cadc3","image_large":"https://i.scdn.co/image/af6d7aa32ee4ede26cebeca0d593b9cab7c044db","open_url":"https://open.spotify.com/track/61BhlKEXnklhOb1cpBbmmF"},{"id":1388,"title":"Infinity","artist":"Dies Irae","preview_url":"http://a1833.phobos.apple.com/us/r1000/068/Music2/v4/03/2e/3b/032e3b4b-e487-c184-492a-01baf50d598c/mzaf_4958415487809945756.m4a","image_small":"http://a3.mzstatic.com/us/r30/Music/y2005/m04/d05/h23/s05.mnnualsd.30x30-50.jpg","image_medium":"http://a2.mzstatic.com/us/r30/Music/y2005/m04/d05/h23/s05.mnnualsd.60x60-50.jpg","image_large":"http://a3.mzstatic.com/us/r30/Music/y2005/m04/d05/h23/s05.mnnualsd.100x100-75.jpg","open_url":"https://itunes.apple.com/us/album/infinity/id56584289?i=56584277&uo=4"},{"id":2554,"title":"Wondering","artist":"Does It Offend You, Yeah?","preview_url":"https://p.scdn.co/mp3-preview/f32a077ad80c541ae2340df33fe9874fb769e877","image_small":"https://i.scdn.co/image/6bdcd597c6cf04e32ab7225b5bda7f6f7616f77e","image_medium":"https://i.scdn.co/image/9070a17839b4c13e315d17324b034f600ba36bcf","image_large":"https://i.scdn.co/image/1cf158a36f07b6df511cbacac8cd98c6e029a4e0","open_url":"https://open.spotify.com/track/0OKEBeRW81mHTl7z8kud2z"},{"id":188,"title":"Hold On","artist":"Nervo","preview_url":"http://a1443.phobos.apple.com/us/r1000/069/Music2/v4/2a/fe/10/2afe103f-a4a9-e388-fb4f-f71a5e265fcc/mzaf_4843758465709251659.aac.m4a","image_small":"http://a2.mzstatic.com/us/r30/Music/v4/7e/bd/41/7ebd41b5-1e03-ed3d-e3e2-f35…b61/UMG_cvrart_05099995894850_01_RGB72_1500x1500_13UMGIM27304.30x30-50.jpg","image_medium":"http://a4.mzstatic.com/us/r30/Music/v4/7e/bd/41/7ebd41b5-1e03-ed3d-e3e2-f35…b61/UMG_cvrart_05099995894850_01_RGB72_1500x1500_13UMGIM27304.60x60-50.jpg","image_large":"http://a2.mzstatic.com/us/r30/Music/v4/7e/bd/41/7ebd41b5-1e03-ed3d-e3e2-f35…1/UMG_cvrart_05099995894850_01_RGB72_1500x1500_13UMGIM27304.100x100-75.jpg","open_url":"https://itunes.apple.com/us/album/hold-on/id628509289?i=628509298&uo=4"},{"id":2012,"title":"Cruel Intentions","artist":"Simian Mobile Disco","preview_url":"https://p.scdn.co/mp3-preview/279b56974e338f68885e14e38faf1fbf95d59f17","image_small":"https://i.scdn.co/image/6af9562815b05f5a7e8c8e3d9f930b2be4632586","image_medium":"https://i.scdn.co/image/847049a4123ff266b9c319e28855af6672fc4989","image_large":"https://i.scdn.co/image/6a015de123ff50e67e90f3403a1fa3a3b1b651a6","open_url":"https://open.spotify.com/track/7tUBrjcebo5oNe7vDxdPYq"},{"id":6041,"title":"Heal This Empty Heart (Extended Mix)","artist":"Giuseppe Ottaviani","preview_url":"https://p.scdn.co/mp3-preview/236225c824a09b8aaf21fbe07e917bd98b1195cb","image_small":"https://i.scdn.co/image/b22908a3a5fae9a20598b184d97b310edeecf651","image_medium":"https://i.scdn.co/image/fc1ad22a2971d4c930a37fc3fb766322ab726ecc","image_large":"https://i.scdn.co/image/6b06d631fd8b011c78ec04192f2fde799a951d7b","open_url":"https://open.spotify.com/track/3KyeN89pRPTkquQVgzAePg"},{"id":5950,"title":"Hey Now - Arty Remix","artist":"London Grammar","preview_url":"https://p.scdn.co/mp3-preview/573e22b611ebdc56e4533faae3c853ef84b4ba1d","image_small":"https://i.scdn.co/image/82e5649bbb32a443f9980761b1cb5b69b99859ce","image_medium":"https://i.scdn.co/image/f1ec6856a8f598522ecbd68a0642a219fffdec40","image_large":"https://i.scdn.co/image/2e2693db25e2969f08001fabad2aeeac42c97d43","open_url":"https://open.spotify.com/track/1CUYpY3GpRNkKnn3cEQ2nK"},{"id":3956,"title":"You Might Need Somebody","artist":"Shola Ama","preview_url":"https://p.scdn.co/mp3-preview/10c1ab61845fc90a33bc360e8aa7a5cf445bc751","image_small":"https://i.scdn.co/image/ccb14a1843af553c10843b1c1a0c074b410f5ce7","image_medium":"https://i.scdn.co/image/08838dd4327787495b6617e93580accc5bfbf306","image_large":"https://i.scdn.co/image/75e6a83304a089128caa3d10f8d973e4020e7e0b","open_url":"https://open.spotify.com/track/3dcKC1U1ysvJpIJ56sEqph"},{"id":6638,"title":"Wash Away","artist":"Matt Costa","preview_url":"https://p.scdn.co/mp3-preview/72f4baed482936d0d1eb2b24bbbdb6c1c308381b","image_small":"https://i.scdn.co/image/051e45ddcda76635d0ff85bc24068cac1bcffb58","image_medium":"https://i.scdn.co/image/2a53db4dd06245969fd6700d4f1c7a2d6f4db106","image_large":"https://i.scdn.co/image/188f30fa7fd233ce8f2cecb70842e20d90aca04e","open_url":"https://open.spotify.com/track/5qzwIUK3vr3zO9Tni4twoM"},{"id":3118,"title":"On Bended Knee","artist":"Boyz II Men","preview_url":"https://p.scdn.co/mp3-preview/55e7bb90d62a07eccd1093c8120a3121839bbbf7","image_small":"https://i.scdn.co/image/24c216c0abca4d3f261926f46ed10cc7094016cc","image_medium":"https://i.scdn.co/image/40d70fba087788e7d810009e168389f14718e07e","image_large":"https://i.scdn.co/image/dfecb9a28684cf62ff7b563251aa484a3ee31a06","open_url":"https://open.spotify.com/track/6DZOX0zlMR6snIRCOVJzYu"},{"id":1400,"title":"Levees","artist":"Terence Blanchard","preview_url":"http://a1919.phobos.apple.com/us/r30/Music6/v4/22/46/05/224605c5-f4fc-fc9d-7781-b8b72ec068c0/mzaf_1540508872188347588.plus.aac.p.m4a","image_small":"http://a3.mzstatic.com/us/r30/Music6/v4/f2/0c/2e/f20c2e8a-863f-1408-d69c-05b1b654c89f/00094639153152.30x30-50.jpg","image_medium":"http://a5.mzstatic.com/us/r30/Music6/v4/f2/0c/2e/f20c2e8a-863f-1408-d69c-05b1b654c89f/00094639153152.60x60-50.jpg","image_large":"http://a5.mzstatic.com/us/r30/Music6/v4/f2/0c/2e/f20c2e8a-863f-1408-d69c-05b1b654c89f/00094639153152.100x100-75.jpg","open_url":"https://itunes.apple.com/us/album/levees/id715983898?i=715984528&uo=4"}]);
});


router.post('/signup', function(req, res, next) {
  var user = new User(req.body);

  user.save(function(err, user){
    if(err){ return next(new Error("That username is already taken.")); }

    res.json(user);
  });
});

router.post('/login', function(req, res, next) {

  User.findOne(req.body, function(err, user) {
    if (err) { return next(err); }
    if (!user) { return next(new Error("Can't find that user!")); }

    res.json(user);
  });
  //var user = new User(req.body);




});


router.get('/users', function(req, res, next) {
  User.find(function(err, users){
    if(err){ return next(err); }

    res.json(users);
  });
});

module.exports = router;