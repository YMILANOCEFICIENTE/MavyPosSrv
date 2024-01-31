@cds.persistence.exists
entity ![GESTIONESCOBRANZABASICON1] {
    ![Cuenta]      : String(255) @title: 'Cuenta';
    ![Factura]     : String(255) @title: 'Factura';
    ![FechaInicio] : String(255) @title: 'FechaInicio';
    ![Resultado]   : String(255) @title: 'Resultado';
    ![Comentario]  : LargeString @title: 'Comentario';
    ![PagoPromesa] : String(255) @title: 'PagoPromesa';
    ![PagoImporte] : String(255) @title: 'PagoImporte';
}

using GESTIONESCOBRANZABASICON1 as V_GESTIONESCOBRANZABASICON1;

context GestionesCobranzaBasico {
    
    define view SflightView as
        select from V_GESTIONESCOBRANZABASICON1
        {
            Cuenta              as![Cuenta],
            Factura             as![Factura],
            FechaInicio             as![FechaInicio],
            Resultado             as![Resultado],
            Comentario              as![Comentario],
            PagoPromesa           as![PagoPromesa],
            PagoImporte          as![PagoImporte]
        };
        
}