import { Injectable } from '@angular/core';
import { NetworkservicesService } from './networkservices.service';


@Injectable({
  providedIn: 'root'
})
export class CommonservicesService {

  constructor(private networkService: NetworkservicesService) { }
 
  getIP(){
    return this.networkService.getIPAddress();
}

getAll(url: string, queryParam: string, urlParam: any, ipAddress: string, Authorization: string, timestamp: string) {
  return this.networkService.httpGetWithHeader(url, queryParam, urlParam, ipAddress, Authorization, timestamp);

}
create(url: string, queryParam: string, urlParam: any, ipAddress: string, Authorization: string, timestamp: string) {
  return this.networkService.httpPostWithHeader(url, queryParam, urlParam, ipAddress, Authorization, timestamp)
}

delete(url: string, queryParam: string, urlParam: any, ipAddress: string, Authorization: string, timestamp: string) {
  return this.networkService.httpDeleteWithHeader(url, queryParam, urlParam, ipAddress, Authorization, timestamp)
}



}
