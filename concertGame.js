      // Check if the user is ready to play!
      confirm("I am ready to play!");

      // Variables
      var age = prompt("What is your age?");
      var userAnswer = prompt("Do you want to race Joel on stage?");
      var feedback = prompt("Please Rate my Game out of 10");

      // Age check

      if (age < 13) {
          console.log("You need a parent!");
      } else {
          console.log("You are old enough");
      }

      console.log("You are at a Billy Joel concert, and you hear this lyric 'Lace my shoes off, start racing.'");

      console.log("Suddenly, Joel stops and says, 'Who wants to race me?'");

      // User Answers 

      if (userAnswer = "yes") {
          console.log("You and Joel start racing. It's neck and neck! You win by a shoelace!");
      } else {
          console.log("Oh no! Joel shakes his head and sings 'I set a pace, so I can race without pacing.'");
      }


      // Game Rating 

      if (feedback > 8) {
          console.log("Thank you! We should race at the next concert!");
      } else {
          console.log("I'll keep practicing coding and racing.");
      }