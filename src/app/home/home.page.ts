import {Component, OnInit} from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Platform} from "@ionic/angular";


// http://www.orangefreesounds.com/tag/animal/page/4/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
    onSuccess : any;
    onError : any;
    list:any;
    constructor(private media: Media,private nativeAudio: NativeAudio,platform: Platform) {

        platform.ready().then(() => {
        this.list = [
            {'name':'Maca','id':'1','file':'assets/audio/cat.mp3','img':'assets/animals/cat.jpg'},
            {'name':'Qeni','id':'2','file':'assets/audio/dog.mp3','img':'assets/animals/dog.jpeg'},
            {'name':'Lopa','id':'3','file':'assets/audio/cow.wav','img':'assets/animals/cow.jpg'},
            {'name':'Tigri','id':'4','file':'assets/audio/tiger.wav','img':'assets/animals/tiger.jpg'},
            {'name':'Majmuni','id':'5','file':'assets/audio/monkey.mp3','img':'assets/animals/monkey.jpg'},
            {'name':'Luani','id':'6','file':'assets/audio/lion.wav','img':'assets/animals/lion.jpg'},
            {'name':'Kali','id':'7','file':'assets/audio/horse.wav','img':'assets/animals/horse.jpg'},
            {'name':'Ujku','id':'8','file':'assets/audio/wolf.mp3','img':'assets/animals/wolf.jpg'},
            {'name':'Pula','id':'9','file':'assets/audio/chicken.mp3','img':'assets/animals/chicken.jpg'},
            {'name':'Zogi','id':'10','file':'assets/audio/babychick.mp3','img':'assets/animals/babychick.jpg'},
            {'name':'Dhija','id':'11','file':'assets/audio/goat.mp3','img':'assets/animals/goat.jpg'},
            {'name':'Elefanti','id':'12','file':'assets/audio/elephant.mp3','img':'assets/animals/elephant.jpg'},
        ];

        });
    }


    ngOnInit(){
        for(let li of this.list) {
            this.nativeAudio.preloadSimple(li.id, li.file).then(()=>{console.log('Playing')});
        }

    }

    touchstart(file,id){

        for(let li of this.list){

            if(li.id !==id ){
                this.nativeAudio.stop(li.id).then(this.onSuccess,this.onError);
            }
        }
        this.nativeAudio.play(id).then(()=>{console.log('Playing')});

    }





}
