import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BaseComponent } from 'src/app/lib/base-component';
import { BookingServiceService } from 'src/app/lib/booking-service.service';
import { Contact } from 'src/app/lib/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends BaseComponent implements OnInit {

  constructor(private fb: FormBuilder, injector: Injector, public service: BookingServiceService) {
    super(injector);
  
  }

  contactModel: Contact = {
    name: '',
    subject: '',
    email: '',
    message:''
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._api.post('/api/v1/contact/contact_create', this.contactModel).subscribe((data: any): void => {
      alert('Thêm thành công');
    })
  }

}
