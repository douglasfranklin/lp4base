import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public posts = [
    {
      name: "Douglas Franklin",
      profile: "https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png",
      date: "24 de Setembro de 2018",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png",
      text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      n_likes: 5,
      n_comment: 4
    },
    {
      name: "Francisco Silva",
      profile: "https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png",
      date: "24 de Setembro de 2018",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png",
      text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      n_likes: 5,
      n_comment: 4
    },
    {
      name: "Adalberto Ferreira",
      profile: "https://ionicframework.com/dist/preview-app/www/assets/img/marty-avatar.png",
      date: "24 de Setembro de 2018",
      image: "https://ionicframework.com/dist/preview-app/www/assets/img/advance-card-bttf.png",
      text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      n_likes: 5,
      n_comment: 4
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
