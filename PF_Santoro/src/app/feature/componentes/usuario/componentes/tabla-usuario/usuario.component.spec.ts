import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreModule } from "@ngrx/store";
import { SharedModule } from "src/app/shared/shared.module";
import { UsuarioComponent } from "./usuario.component";

describe('UsuarioComponent', () => {
    let component: UsuarioComponent;
    let fixture: ComponentFixture<UsuarioComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          HttpClientModule,
          SharedModule,
          StoreModule.forRoot({}),
          RouterTestingModule,
          ],
        declarations: [ UsuarioComponent ]
      })
      .compileComponents();
  
      fixture = TestBed.createComponent(UsuarioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('se crea', () => {
      expect(component).toBeTruthy();
    });
  
    it(
      'Los usuarios se cargan correctamente', 
      () => {
      const fixture = TestBed.createComponent(UsuarioComponent);
      const controlador = fixture.componentInstance;
  
      fixture.detectChanges();
      setTimeout(() => {
        expect(controlador.data$).toBeTruthy();
      }, 5000);
    })
  
    it(
      'La tabla usuarios se muestra en pantalla',    () => {
        const fixture = TestBed.createComponent(UsuarioComponent);
        const vista = fixture.nativeElement as HTMLElement;
  
        fixture.detectChanges();
        expect(vista.querySelector('table')?.textContent).toContain(
          'username'
        );
    })
  })
  