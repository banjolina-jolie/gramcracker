Players = new Meteor.Collection("players");
Hashtags = new Meteor.Collection("hashtags");
Images = new Meteor.Collection("images");

if (Meteor.isClient) {

  Session.set("username", "Instagram Handle");

  Template.hello.greeting = function () {
    if(Players.find().count() === 4){
      return "Join a game!";
    }
  };

  Template.hello.events({
    'click input#join' : function () {
      Players.insert({username: Session.get("username"), thumbnail:"imageChoice", score: 0, isJudge: false});
    }
  });

  Template.judge.playerJudge = function() {
    return Session.get("judge");
  };

  Template.players.list = function(){
    return Players.find();
  };

  Template.player.events({
    'click button.kill' : function () {
      Players.remove(this._id);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Players.remove({});
  });
}
