namespace app.interactions;

using {Country} from '@sap/cds/common';

context ext {

        @cds.persistence.exists
        entity GESTIONESCOBRANZABASICON {
                Cuenta      : String(255) @title: 'Cuenta';
                Factura     : String(255) @title: 'Factura';
                FechaInicio : String(255) @title: 'FechaInicio';
                Resultado   : String(255) @title: 'Resultado';
                Comentario  : LargeString @title: 'Comentario';
                PagoPromesa : String(255) @title: 'PagoPromesa';
                PagoImporte : String(255) @title: 'PagoImporte';
        };

        @cds.persistence.exists
        entity ExisteAsignacionClienteFN(OP : Integer, USER : String(20)) {
                RES : String(30) @title: 'RES';
        };

        @cds.persistence.exists
        entity TablaStD {
                TablaSt : String(50) not null  @title: 'TABLAST';
                Nombre  : String(250) not null @title: 'NOMBRE';
                Valor   : String(250)          @title: 'VALOR';
        }


}
