import { of as observableOf, fromEvent, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../lib/api.service';
import { ActivatedRoute } from '@angular/router';
import { Injector } from '@angular/core';
declare var $: any;
export class BaseComponent {
   public gender: any;
   public role: any;
   public locale_vn:any;
   public today: any;
   public dateFormat: any;
   public unsubscribe = new Subject();
   public _api: ApiService;
   public _route: ActivatedRoute;
   constructor(injector: Injector) { 
          this.today = new Date();
          this.dateFormat = "dd/mm/yy";
          this.gender =  [
            {label:'Nam',value:1},
            {label:'Nữ',value:2},
            {label:'Khác',value:3}
          ];   
          this.role =  [
            {label:'admin',value:1},
            {label:'user',value:2}
          ];   
          
          this._api = injector.get(ApiService);
          this._route = injector.get(ActivatedRoute);
      }
//    public getEncodeFromImage(fileUpload: FileUpload) {
//         if (fileUpload) {
//           if (fileUpload.files == null || fileUpload.files.length == 0) {
//             return observableOf('');
//           }
//           let file: File = fileUpload.files[0];
//           let reader: FileReader = new FileReader();
//           reader.readAsDataURL(file);
//           return fromEvent(reader, 'load').pipe(
//             map((e) => {
//               let result = '';
//               let tmp: any = reader.result;
//               let baseCode = tmp.substring(tmp.indexOf('base64,', 0) + 7);
//               result = file.name + ';' + file.size + ';' + baseCode;
//               return result;
//             })
//           );
//         } else {
//           return observableOf(null);
//         }
//       }

    //   public  compare(pObject_1, pObject_2, keyField = 'id') {
    //     let result = [];
    //     let originSources = [];
    //     let originIDs = [];
    //     let handleSources = [];
    //     let handleIDs = []; 
    //     if (pObject_1 == null && pObject_2 != null) {
    //         if (!$.isArray(pObject_2)) {
    //             return [Object.assign({}, pObject_2, { status: 1 })];
    //         } else {
    //             pObject_2.forEach(ds => {
    //                 result.push(Object.assign({}, ds, { status: 1 }));
    //             });
    //             return result;
    //         }
    //     }

    //     if (pObject_1 != null && pObject_2 == null) {
    //         if (!$.isArray(pObject_1)) {
    //             return [Object.assign({}, pObject_1, { status: 3 })];
    //         } else {
    //             pObject_1.forEach(ds => {
    //                 result.push(Object.assign({}, ds, { status: 3 }));
    //             });
    //             return result;
    //         }
    //     }

    //     if (!$.isArray(pObject_1)) {
    //         pObject_1 = [{ data: pObject_1 }];
    //     }

    //     if (!$.isArray(pObject_2)) {
    //         pObject_2 = [{ data: pObject_2 }];
    //     }
    //     this.executeRecursive(pObject_1, (item) => {
    //         let tmp = Object.assign({}, item);
    //         if (tmp.parent) {
    //             tmp.parent = null;
    //         }
    //         originSources.push(tmp.data || tmp);
    //     });
    //     for (let i = 0; i < originSources.length; i++) {
    //         originIDs.push(originSources[i][keyField]);
    //         if (originSources[i].children) {
    //             originSources[i].children = null;
    //         }
    //     }
    //     this.executeRecursive(pObject_2, (item) => {
    //         let tmp = Object.assign({}, item);
    //         if (tmp.parent) {
    //             tmp.parent = null;
    //         }
    //         handleSources.push(tmp.data || tmp);
    //     });
    //     for (let i = 0; i < handleSources.length; i++) {
    //         handleIDs.push(handleSources[i][keyField]);
    //         if (handleSources[i].children) {
    //             handleSources[i].children = null;
    //         }
    //     }
    //     for (let i = 0; i < originIDs.length; i++) {
    //         // Record keep on new item
    //         let idx = handleIDs.indexOf(originIDs[i]);
    //         if (idx > -1) {
    //             let origin = Object.assign({}, originSources[i]);
    //             let handle = Object.assign({}, handleSources[idx]);
    //             this.formatTypeofToStringObject(origin);
    //             this.formatTypeofToStringObject(handle);
    //             // Compare to set status
    //             if (JSON.stringify(origin, Object.keys(origin).sort()) != JSON.stringify(handle, Object.keys(origin).sort())) {
    //                 result.push(Object.assign({}, handleSources[idx], { status: 2 }));
    //             }
    //         } else {
    //             result.push(Object.assign({}, originSources[i], { status: 3 }));
    //         }
    //     }
    //     for (let i = 0; i < handleIDs.length; i++) {
    //         // New item -> set status to 1
    //         if (originIDs.indexOf(handleIDs[i]) < 0) {
    //             result.push(Object.assign({}, handleSources[i], { status: 1 }));
    //         }
    //     }
    //     return result;
    // }
//     public executeRecursive(data, predicate) {
//       return !!!data ? null : data.reduce((list, entry) => {
//           predicate(entry);
//           if (entry.data && entry.data.children != null) {
//               this.executeRecursive(entry.data.children, predicate);
//           } else if (entry.children != null) {
//               this.executeRecursive(entry.children, predicate);
//           }
//           return list;
//       }, []);
//   }
//   public  formatTypeofToStringObject(obj) {
//     if (obj && typeof obj === 'object') {
//         for (let i in obj) {
//             if (Array.isArray(obj[i])) {
//                 for (let j in obj[i]) {
//                     this.formatTypeofToStringObject(obj[i][j]);
//                 }
//             }
//             if (typeof obj[i] === 'number') { obj[i] = obj[i].toString(); }
//             if (obj[i] instanceof Date) { obj[i] = obj[i].toString(); }
//         }
//     }
// }
}