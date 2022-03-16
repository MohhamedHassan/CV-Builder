import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import SwiperCore, { Navigation, Swiper , Pagination} from 'swiper/core';
SwiperCore.use([Navigation,Pagination]);
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  abouus=[
    {img:'assets/p1.png',name:'Sabrina Nelson',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p2.png',name:'Joseph Pattison',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p3.png',name:'Alberto Gonzalez',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p4.png',name:'Star Mar5tinez',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p1.png',name:'Sabrina Nelson',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p2.png',name:'Joseph Pattison',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p3.png',name:'Alberto Gonzalez',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
    {img:'assets/p4.png',name:'Star Mar5tinez',text:"With the word format my CVs got messy and didn't look good, with cvfy I have different templates ready anywhere"},
  ]
  counter=0
  constructor(private apis:ApisService) { }

  ngOnInit(): void {
    this.apis.getCounter().subscribe(
      (res:any) => {
        console.log(res)
        this.counter=res?.counter[0].counter
      } , err =>  {
        console.log(err)
      }
    )
  }
  swiperConfig: any = {
    slidesPerView: "2.6",
    loop: true,
    spaceBetween: "50",
    pagination: { clickable: true},
    navigation: "false",
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  }
}
