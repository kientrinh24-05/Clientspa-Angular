import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/lib/api.service';
import { BaseComponent } from 'src/app/lib/base-component';
import { BookingServiceService } from '../../lib/booking-service.service';
import { Bookingapp } from '../../lib/bookingapp.model';
import * as moment from 'moment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {


  public images: any;
  public formdata: any;
  public users: any;
  public contacts: any;
  public user: any;
  public totalRecords: any;
  public pageSize = 10;
  public pageNumber = 1;
  public ascSort = true;
  public sortCase = 1;
  public page = 1;
  public status = 1;
  public searchKey = "";
  public uploadedFiles: any[] = [];
  public formsearch: any;
  public doneSetupForm: any;
  public showUpdateModal: any;
  public isCreate: any;
  public userss: any


  services: any = [];
  userBooking: Bookingapp = {
    address: '',
    name: '',
    phone: '',
    email: '',
    date: moment().format("YYYY-MM-DD HH:mm:ss"),
    productId: 0,
  }


  constructor(private fb: FormBuilder, injector: Injector, public service: BookingServiceService) {
    super(injector);

  }
  ngOnInit(): void {
    this.search();
    this.getContact();
  }

  slides = [
    { img: 'https://via.placeholder.com/600.png/09f/fff' },
    { img: 'https://via.placeholder.com/600.png/021/fff' },
    { img: 'https://via.placeholder.com/600.png/321/fff' },
    { img: 'https://via.placeholder.com/600.png/422/fff' },
    { img: 'https://via.placeholder.com/600.png/654/fff' },
  ];
  slideConfig = { slidesToShow: 5, slidesToScroll: 5 };
  addSlide() {
    this.slides.push({ img: 'http://placehold.it/350x150/777777' });
  }
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  slickInit(e: any) {
    console.log('slick initialized');
  }
  breakpoint(e: any) {
    console.log('breakpoint');
  }
  afterChange(e: any) {
    console.log('afterChange');
  }
  beforeChange(e: any) {
    console.log('beforeChange');
  }

  // createBooking(value:any)  {
  //   let body = {
  //     address: value.address,
  //     date: value.date,
  //     email: value.email,
  //     name: value.name,
  //     phone: value.phone,
  //     productId: value.productId,
  //   }
  //   console.log("Kane");
  //   console.log(1);
  // }

  search() {
    this.page = 1;
    this.pageSize = 10
    this._api.post('/api/v1/products/product_get_list_paging_sort_search_filter', { pageNumber: this.pageNumber, pageSize: this.pageSize, searchKey: this.searchKey, sortCase: this.sortCase, ascSort: this.ascSort, status: this.status }).subscribe(res => {
      this.users = res.data.content;
      console.log(res.data.content);

      this.totalRecords = res.totalItems;
      this.pageSize = res.pageSize;
    });
  }

  getContact() {
    this.page = 1;
    this.pageSize = 10
    this._api.post('/api/v1/contact/contact_get_list_paging_sort_search_filter', { pageNumber: this.pageNumber, pageSize: this.pageSize, sortCase: this.sortCase, ascSort: this.ascSort }).subscribe(res => {
      this.userss = res.data.content.slice(0, 4);

      this.totalRecords = res.totalItems;
      this.pageSize = res.pageSize;
    });
  }

  onSubmit() {
    this.userBooking.date = moment(this.userBooking.date).format("YYYY-MM-DD HH:mm:ss");
    this.userBooking.productId = +this.userBooking.productId;
    this._api.post('/api/v1/booking/booking_create', this.userBooking).subscribe((data: any): void => {
      alert('Thêm thành công');
    })
    // this._api
    // console.log(this.userBooking);
  }



  // listService() {
  //   this.get
  // }

}
