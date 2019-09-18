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

  @ViewChild(MatPaginator, { read: true, static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { read: true, static: false }) sort: MatSort;

  subscription: Subscription

  source: MatTableDataSource<CatalogItem>
  

  constructor(private appService: AppService) { }

  initializeSource(catalogItems: CatalogItem[]) {
    this.source = new MatTableDataSource(catalogItems)
    this.source.paginator = this.paginator;
    this.source.sort = this.sort;
  }

  ngOnInit() {
    // let catalogItem = this.appService.read<CatalogItem>("CatalogItem")cata
    // this.subscription = catalogItems.subscribe((data: CatalogItem[]) => {
    //   console.log("")

    // })
  }

}
