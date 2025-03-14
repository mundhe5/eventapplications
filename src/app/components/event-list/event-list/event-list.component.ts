import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EventService } from 'src/app/services/event.service';
import { ConfirmDialogComponent } from '../../confirm-dialog-component/confirm-dialog/confirm-dialog.component';
import  {Event}  from  '../../../event.modal'
import { Router } from '@angular/router';

;

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {


  displayedColumns: string[] = ['title', 'date', 'location', 'description', 'actions'];
  dataSource: MatTableDataSource<Event>;

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;

  constructor(
    private eventService: EventService,
    private dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource<Event>();
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(events => {
      this.dataSource.data = events;
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: KeyboardEvent): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteEvent(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { title: 'Confirm Delete', message: 'Are you sure you want to delete this event?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventService.deleteEvent(id);
        this.dataSource.data = this.dataSource.data.filter(event => event.id !== id);
      }
    });
  }
}

