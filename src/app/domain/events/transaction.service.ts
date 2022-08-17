import { Injectable } from '@angular/core';
import {Transaction} from "./transaction.entity";
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { createStore } from '@ngneat/elf';
import {withEntities, selectAllEntities, setEntities, UIEntitiesRef, selectEntity} from '@ngneat/elf-entities';

const transactionsStore = createStore({ name: 'transactions' }, withEntities<Transaction>());

@Injectable({providedIn: 'root'})
export class TransactionService {

  private transactionUrl = 'https://run.mocky.io/v3/d22082c3-cb86-4478-8f40-e4ee470e6ae3'

  constructor(private http: HttpClient) { }

  getTransaction() {
    return this.http.get(this.transactionUrl);
  }

  showTransaction() {
    this.transactionService.getTransaction()
      .subscribe((data: Transaction) => this.transaction = {
          eventId: data['eventId'],
          topic:  data['topic'],
          type: data['type'],
          transactionId: data['transactionId'],
          originalTransactionId: data['originalTransactionId'],
          postingDate: data['postingDate'],
          amount: data['amount'],
      });
  }
}
