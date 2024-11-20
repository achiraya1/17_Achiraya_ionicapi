import { Component, OnInit } from '@angular/core';
import {DataapiService} from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})

export class ShowPage implements OnInit {

  member:any=[];//ประกาศตัวแปรแบบอาเรย์ เพื่อมารับค่า

  constructor(
    private http: DataapiService ,
    private dataapi:HttpClient,
    private nav:NavController
  ) {
    this.loadDataMem();
   }

  ngOnInit() {
  }
  loadDataMem(){
    this.http.listMenber().subscribe({
      next:(res:any)=>{
        console.log("แสดงข้อมูลสำเร็จ");
        this.member =res;
      },
      error:(error:any)=>{
        console.log("แสดงข้อมูลไม่สำเร็จ",error);
      }
    })
  }

  edit(datamem:any) {
    this.http.data_detailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }
  delMem(id:any){
    this.http.deleteMember(id).subscribe({
      next:(res:any)=>{
        console.log("ลบข้อมูลสำเร็จ",res);
      },
      error:(error:any)=>{
        console.log("ลบข้อมูลไม่สำเร็จ",error);
      }
    });
  }
}
