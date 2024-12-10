import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatFormFieldModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  TableData : MatTableDataSource<any> = new MatTableDataSource()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns = ['id', 'name','email']
  constructor(private http :HttpClient){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (data:any) => {this.TableData.data = data; console.log(this.TableData.data)}
    )
  }

  ngAfterViewInit(): void {
      this.TableData.paginator = this.paginator
  }

  filter(filterValue:any){
    let f = filterValue.target.value.trim().toLowerCase()
    this.TableData.filter = f
  }
}
