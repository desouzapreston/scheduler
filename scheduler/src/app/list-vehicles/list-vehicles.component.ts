import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTable } from '@angular/material';
import { CatalogItem } from '../shared/catalog-item';
import { Subscription } from 'rxjs';
import { AppService } from '../shared/app.service';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

  displayedColumns: string[] = ['name', 'description', 'price']

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  subscription: Subscription

  source: MatTableDataSource<CatalogItem>
  

  constructor(private appService: AppService) { }

  initializeSource(catalogItem: CatalogItem[]) {
    this.source = new MatTableDataSource(catalogItem)
    this.source.paginator = this.paginator;
    this.source.sort = this.sort;
  }

  ngOnInit() {
    let catalogItem = this.appService.read<CatalogItem>("CatalogItem")
  }

}
