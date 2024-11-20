import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  constructor(
    public http: HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  data_detailMen:any=[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){
    console.log("ข้อมูลที่ส่งไปยัง api",data);
    return this.http.post('http://localhost/class2-4/api/insert.php',data);
  }
  //ฟังชั่นดึงข้อมูลจากapi
  listMenber(){
    return this.http.get('http://localhost/class2-4/api/listmember.php');
  }

  //ฟังชั่นสำหรับการแก้ไขข้อมูลที่ส่งไปapi
  editMember(dataEdit:any){
    return this.http.put('http://localhost/class2-4/api/update.php',dataEdit);
  }
  //ฟังชั่นลบข้อมูล
  deleteMember(id:any){
    return this.http.delete('http://localhost/class2-4/api/delete.php?id='+id);
  }
}
