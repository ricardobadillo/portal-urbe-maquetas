export interface Pensum {
    estadoPensum: string;
    idPensum: number;
    levels: Nivel[];
    niveles: number;
    revision: Date;
    semanasPeriodo: number;
    totalHorasRequeridas: number;
    totalMateriasRequerida: number;
    totalUcRequerida: number;
    vigencia: Date;
    version: string;
}

export interface Prelation {
    idContenido: number;
    codigoMateria: string;
    contenidoProgramatico: string;
    tipoContenido: string;
}

export interface Subject {
    idContenido: number;
    codigoMateria: string;
    contenidoProgramatico: string;
    tiempoTeorico: number;
    tiempoPractico: number;
    tiempoLaboratorio: number;
    cantidadUc: number;
    obligatoria: "OBLIGATORIA" | "ELECTIVA" | "NIVELACION" | "OPTATIVA";
    tipoContenido: string;
    introduccion?: unknown;
    codigoAuxiliar?: unknown;
    totalHorasSem: number;
    totalHorasCont: number;
    sms?: unknown;
    prelations: Prelation[];
}

export interface Nivel {
    idNivel: number;
    frecuenciaPeriodo?: unknown;
    nivel: number;
    cantidadMaterias: number;
    cantidadUc: number;
    subjects: Subject[];
}
