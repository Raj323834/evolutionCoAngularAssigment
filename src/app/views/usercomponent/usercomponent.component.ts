import { Component, OnInit } from '@angular/core';
import { CommonservicesService } from 'src/app/services/commonservices.service';
import { UrlConstants } from 'src/app/urlconstant/UrlConstants';
import { AppConstants } from 'src/app/urlconstant/AppConstants';


@Component({
  selector: 'app-usercomponent',
  templateUrl: './usercomponent.component.html',
  styleUrls: ['./usercomponent.component.css']
})
export class UsercomponentComponent implements OnInit {
  headers: any;

  constructor(private commonServices: CommonservicesService) { }

  private ipAddress: string = ""
  ngOnInit(): void {
    this.getUserDetails();
    this.commonServices.getIP().subscribe((res: any) => {
      this.ipAddress = (res != null) ? res.ip : AppConstants.DEFAULT_IP;
    });
  }


  public items: string[] = [];
  public id: Number = 0;
  name: String ="";
  username: String = "";
  email: String = "";

//Read properties of Json object and its values dynamically
  readJsonDynamically(){
    this.headers = Object.keys(this.items[0]);
  }
  getUserDetails = () => {
    let Authorization = "97f7d472a66171554a84cf51e53577dc07abefa318e9df14ce7b1d8b006359e8";
    let params: URLSearchParams = new URLSearchParams();
    this.commonServices.getAll(UrlConstants.getData, params.toString(), AppConstants.NO_QUERY_PARAM, this.ipAddress, Authorization, '' + Date.now())
      .subscribe(resData => {
        this.items = resData;
        this.readJsonDynamically()
        console.log(resData)
      })
  }

  createUserDetails = () => {
    let Authorization = "97f7d472a66171554a84cf51e53577dc07abefa318e9df14ce7b1d8b006359e8";
    let params: URLSearchParams = new URLSearchParams();
    this.commonServices.create(UrlConstants.postData, params.toString(), AppConstants.NO_QUERY_PARAM, this.ipAddress, Authorization, '' + Date.now())
      .subscribe(resData => {
        this.getUserDetails();
        console.log(resData)
      })
  }

  deleteUserDetails = () => {
    let Authorization = "97f7d472a66171554a84cf51e53577dc07abefa318e9df14ce7b1d8b006359e8";
    let params: URLSearchParams = new URLSearchParams();
    this.commonServices.getAll(UrlConstants.deleteData, params.toString(), AppConstants.NO_QUERY_PARAM, this.ipAddress, Authorization, '' + Date.now())
      .subscribe(resData => {
        this.getUserDetails();
        console.log(resData)
      })
  }
}
