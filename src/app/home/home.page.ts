import {Component, OnInit} from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import {Platform} from "@ionic/angular";
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

// http://www.orangefreesounds.com/tag/animal/page/4/
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{
    onSuccess : any;
    onError : any;
    list:any;
    loading = false;
    constructor(private media: Media,private nativeAudio: NativeAudio,platform: Platform) {

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
            {'name':'Arusha','id':'13','file':'assets/audio/bear.mp3','img':'assets/animals/bear.jpg'},
            {'name':'Delfin','id':'14','file':'assets/audio/dolphin.mp3','img':'assets/animals/dolphin.jpg'},
            {'name':'Zhaba','id':'15','file':'assets/audio/frog.mp3','img':'assets/animals/frog.jpg'},
            {'name':'Delja','id':'16','file':'assets/audio/sheep.mp3','img':'assets/animals/sheep.jpg'},
            {'name':'Gjeli','id':'17','file':'assets/audio/rooster.mp3','img':'assets/animals/rooster.jpg'},
            {'name':'Pllubi','id':'18','file':'assets/audio/pigeon.mp3','img':'assets/animals/pigeon.jpg'},
            {'name':'Shqiponja','id':'19','file':'assets/audio/eagle.mp3','img':'assets/animals/eagle.jpg'},
            {'name':'Gomari','id':'20','file':'assets/audio/donkey.mp3','img':'assets/animals/donkey.jpg'},
            {'name':'Qurra','id':'21','file':'assets/audio/turkey.mp3','img':'assets/animals/turkey.jpg'},
            {'name':'Papagalli','id':'22','file':'assets/audio/parrot.mp3','img':'assets/animals/parrot.jpg'},
            {'name':'Huti','id':'23','file':'assets/audio/owl.mp3','img':'assets/animals/owl.jpg'},
            {'name':'Kercylli','id':'24','file':'assets/audio/cricket.mp3','img':'assets/animals/cricket.jpg'},
            {'name':'Dreri','id':'25','file':'assets/audio/deer.mp3','img':'assets/animals/deer.jpg'},
            {'name':'Pata','id':'26','file':'assets/audio/duck.mp3','img':'assets/animals/duck.jpg'},
            {'name':'Sorra','id':'27','file':'assets/audio/crow.mp3','img':'assets/animals/crow.jpg'},
            {'name':'Seagulls','id':'28','file':'assets/audio/seagulls.mp3','img':'assets/animals/seagulls.jpg'},
            {'name':'Sparrow','id':'29','file':'assets/audio/sparrow.mp3','img':'assets/animals/sparrow.jpg'},
            {'name':'Peacock','id':'30','file':'assets/audio/peacock.mp3','img':'assets/animals/peacock.gif'},

        ];


    }


    ngOnInit(){

        for(let li of this.list) {
            this.nativeAudio.preloadSimple(li.id, li.file).then(()=>{console.log('Playing')});
        }
        setTimeout(() => {
            this.loading = true;
        }, 5000);
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
