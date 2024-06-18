// Angular.
import { I18nSelectPipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

// Modelos.
import { Nivel, Pensum, Subject } from '../../core/models/pensum';

interface Materia {
  obligatoria: string;
  nivel: number;
}



@Component({
  imports: [ I18nSelectPipe, NgFor, NgIf, UpperCasePipe, ],
  selector: 'app-pensum-cards',
  standalone: true,
  styleUrls: ['./pensum-cards.component.scss'],
  templateUrl: './pensum-cards.component.html',
})
export class PensumCardsComponent implements OnChanges {

  public electivas: Array<Materia> = [];
  public optativas: Array<Materia> = [];

  public semesterMap = { '1': "I", '2': "II", '3': "III", '4': "IV", '5': "V", '6': "VI", '7': "VII", '8': "VIII", '9': "IV", '10': "X", '11': "XI", '12': "XII" };

  @Input()
  public isLinear = true;

  @Input()
  public pensum: Pensum = {} as Pensum;


  ngOnChanges(): void {
    if (!this.pensum) return;

    this.pensum.levels = this.pensum.levels.filter((semester) => semester.nivel !== 0);

    this.pensum.levels.map((semester: Nivel) => {
      semester.subjects.map((materia: Subject) => {
        if (materia.obligatoria === 'ELECTIVA') {
          this.electivas.push({ nivel: semester.nivel, obligatoria: materia.obligatoria, });
        }

        if (materia.obligatoria === 'OPTATIVA') {
          this.optativas.push({ nivel: semester.nivel, obligatoria: materia.obligatoria, });
        }
      });
    });

    this.electivas = this.electivas.filter((electiva, index) => {
      return this.electivas.findIndex((materia) => materia.nivel === electiva.nivel) === index;
    });

    this.optativas = this.optativas.filter((optativa, index) => {
      return this.optativas.findIndex((materia) => materia.nivel === optativa.nivel) === index;
    });
  }
}