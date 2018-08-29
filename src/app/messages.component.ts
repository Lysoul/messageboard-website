import { Component } from '@angular/core';

@Component({
    selector: 'message',
    template: ` 

    <div *ngFor="let message of messages"> 
        <mat-card style="margin:8px"> 
            <mat-card-title> {{message.owner}} </mat-card-title>
            <mat-card-content> {{message.text}} </mat-card-content>
        </mat-card>
    </div>
    `
})

export class MessageCoponent{
    messages = [{text:'some text',owner:'Tim'},{text:'another text',owner:'Bank'}];
}