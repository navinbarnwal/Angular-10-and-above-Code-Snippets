import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'http-pdf-to-blob-pdf-url-encoding';
  url = '';

  justdownload(pdfUrl): void{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';

    xhr.onload = function(e) {
      if (this.status === 200) {
        const anchor = document.createElement('a');
        const blob = new Blob([this.response], {type: 'application/pdf'});
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = 'file.pdf';
        anchor.dispatchEvent(new MouseEvent('click'));
      }
    };

    xhr.send();
  }
  openinnewwindow(pdfUrl): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
      if (this.status === 200) {
        const blob = new Blob([this.response], {type: 'application/pdf'});
        const url = URL.createObjectURL(blob);
        const printWindow = window.open(url, '_blank', );
      }
    };

    xhr.send();
  }
  downloadResume(pdfUrl): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function (e) {
      if (this.status === 200) {
        const blob = new Blob([this.response], {type: 'application/pdf'});
        const url = URL.createObjectURL(blob);
        const printWindow = window.open(url, '', 'width=900,height=600');
      }
    };

    xhr.send();
  }
  downloadandprint(pdfUrl): void {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', pdfUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = new Blob([this.response], {type: 'application/pdf'});
        const url = URL.createObjectURL(blob);
        const printWindow = window.open(url, '', 'width=900,height=600');
        printWindow.print();
      }
    };

    xhr.send();
  }
}
