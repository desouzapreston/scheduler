import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Vehicle } from '../shared/vehicle';
import { Subscription } from 'rxjs';
import { AppService } from '../shared/app.service';
// import { convertUpdateArguments } from '@angular/compiler/src/compiler_util/expression_converter';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
})
export class ListVehiclesComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['makeOfVehicle', 'modelOfVehicle', 'yearOfVehicle'] //https://blog.angular-university.io/angular-material-data-table/

  // Added {read:....:false} to both @ViewChild property decorators
  // Fixed bug fix: of expecting two arguments & static flag
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  subscription: Subscription

  dataSource: MatTableDataSource<Vehicle>
  

  constructor(private route: Router, private appService: AppService) { }

  initializeSource(vehicles: Vehicle[]) {
    this.dataSource = new MatTableDataSource(vehicles)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.dataSource.connect();
  }

  ngOnInit() {
    let vehicles = this.appService.read<Vehicle>("Vehicle")
    this.subscription = vehicles.subscribe((data: Vehicle[]) => {
      console.log("updating catalog", data)
      this.initializeSource(data)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onCreate() {
    this.route.navigateByUrl('/createVehicle');
  }

  applyFilter(filterInput: string) {
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
