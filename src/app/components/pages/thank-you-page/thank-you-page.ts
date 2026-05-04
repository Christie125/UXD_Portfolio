import { Component } from '@angular/core';
import { BasicHeading } from '../../basic-heading/basic-heading';
import { Footer } from '../../footer/footer';
import { BigButton } from '../../big-button/big-button';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-thank-you-page',
    imports: [BasicHeading, Footer, BigButton, RouterLink],
    templateUrl: './thank-you-page.html',
    styleUrl: './thank-you-page.css',
})
export class ThankYouPage {
}
