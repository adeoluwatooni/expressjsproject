const timeChecker = (req, res, next) => {
  
  const d = new Date();
  let dayOfTheWeek = d.getDay();
  let hourOfTheday = d.getHours();

  //To check if the user is accessing during the week
  if (dayOfTheWeek === 0 || dayOfTheWeek === 6 ){
    return res.status(403).send("Sorry, Agba Dev's site only available on weekdays")
    console.log("Site Uvailable");
  }

  //To check if the user is accessing during the week
  if (hourOfTheday < 9 || hourOfTheday > 17 ){
    return res.status(403).send("Sorry, Agba Dev's site only available from 9am to 5pm")
    console.log("Site Uvailable");
  }

  //if you accesswithin the normal working time, display the home page
  next()
}

module.exports = timeChecker;

// /* GET home page. */
// router.get('/', function(req, res, next) {

//   const timeChecker = (req, res, next) => {
  
//     const date = Date();
//     let dayOfTheWeek = date.getDay();
//     let hourOfTheday = date.getHours();
  
//     //To check if the user is accessing during the week
//     if (dayOfTheWeek === 0 || dayOfTheWeek === 6 ){
//       return res.status(403).send("Sorry, Agba Dev's site only available during weekdays")
//       console.log("Site Uvailable");
//     }else
  
//     //To check if the user is accessing during the week
//     if (hourOfTheday < 9 || hourOfTheday > 17 ){
//       return res.status(403).send("Sorry, Agba Dev's site only available from 9am to 5pm")
//       console.log("Site Uvailable");
//     }else
  
//     //if you accesswithin the normal working time, display the home page
//     res.render('home', { title: 'Home' });
//   }
// });

// module.exports = timeChecker;