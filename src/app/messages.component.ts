import { Component } from '@angular/core';

@Component({
    selector: 'message',
    template: 'this is the message component <div *ngFor="let message of messages"> {{message.text}} by: {{message.owner}} </div>'
})

export class MessageCoponent{
    messages = [{text:'some text',owner:'Tim'},{text:'Anther text',owner:'Bank'}];
}