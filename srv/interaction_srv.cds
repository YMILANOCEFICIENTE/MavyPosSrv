using app.interactions from '../db/interactions';
//using in_Patch_ActualizarDireccionAval from '../db/interactions/in_Patch_ActualizarDireccionAval';
//using out_Patch_ActualizarDireccionAval from '../db/interactions/out_Patch_ActualizarDireccionAval';


service PosSrv {


    @cds.persistence.exists
    @readonly
    entity GestionesCobranzaBasico                                    as projection on interactions.ext.GESTIONESCOBRANZABASICON;

    @cds.persistence.exists
    @readonly
    entity ExisteAsignacionClienteFN(OP : Integer, USER : String(20)) as projection on interactions.ext.ExisteAsignacionClienteFN;

    @cds.persistence.exists
    @readonly
    entity TablaStD                                                   as projection on interactions.ext.TablaStD;


    action ActualizarDireccionAval(Cliente : String(10),
                                   Sucursal : Integer,
                                   Usuario : String(10),
                                   Nombre : String(100),
                                   DomicilioAnterior : String(148),
                                   Domiciolio : String(148),
                                   NumExt : String(20),
                                   NumInt : String(20),
                                   Cruces : String(100),
                                   Colonia : String(100),
                                   Estado : String(50),
                                   Poblacion : String(100),
                                   CP : String(5),
                                   TelFijo : String(10),
                                   TelMovil : String(10),
                                   Email : String(100),
                                   Dominio : String(100),
                                   Comentarios : String(200),
                                   IdCteCto : Integer,
                                   Nomina : String(20),
                                   IdAval : Integer)                returns {
        conpleto : Boolean;
        Valido : Boolean;
        menaje : String(50);
    };

    action ActualizarDireccionBeneficiario(Cliente : String(10),
                                           Sucursal : Integer,
                                           Usuario : String(10),
                                           Nombre : String(100),
                                           DomicilioAnterior : String(148),
                                           Domiciolio : String(148),
                                           NumExt : String(20),
                                           NumInt : String(20),
                                           Cruces : String(100),
                                           Colonia : String(100),
                                           Estado : String(50),
                                           Poblacion : String(100),
                                           CP : String(5),
                                           TelFijo : String(10),
                                           TelMovil : String(10),
                                           Email : String(100),
                                           Dominio : String(100),
                                           Comentarios : String(200),
                                           IdCteCto : Integer,
                                           Nomina : String(20),
                                           IdAval : Integer)        returns {
        conpleto : Boolean;
        Valido : Boolean;
        menaje : String(50);
    };

    action ActualizarDireccionCliente(Cliente : String(10),
                                      Sucursal : Integer,
                                      Usuario : String(10),
                                      Nombre : String(100),
                                      DomicilioAnterior : String(148),
                                      Domiciolio : String(148),
                                      NumExt : String(20),
                                      NumInt : String(20),
                                      Cruces : String(100),
                                      Colonia : String(100),
                                      Estado : String(50),
                                      Poblacion : String(100),
                                      CP : String(5),
                                      TelFijo : String(10),
                                      TelMovil : String(10),
                                      Email : String(100),
                                      Dominio : String(100),
                                      Comentarios : String(200),
                                      IdCteCto : Integer,
                                      Nomina : String(20),
                                      IdAval : Integer)             returns {
        conpleto : Boolean;
        Valido : Boolean;
        menaje : String(50);
    };

    action ActualizarDatoBeneficiarioNipGenerico(Cliente : String(10),
                                                 Sucursal : Integer,
                                                 Usuario : String(10),
                                                 Nombre : String(100),
                                                 DomicilioAnterior : String(148),
                                                 Domiciolio : String(148),
                                                 NumExt : String(20),
                                                 NumInt : String(20),
                                                 Cruces : String(100),
                                                 Colonia : String(100),
                                                 Estado : String(50),
                                                 Poblacion : String(100),
                                                 CP : String(5),
                                                 TelFijo : String(10),
                                                 TelMovil : String(10),
                                                 Email : String(100),
                                                 Dominio : String(100),
                                                 Comentarios : String(200),
                                                 IdCteCto : Integer,
                                                 Nomina : String(20),
                                                 IdAval : Integer)  returns {
        conpleto : Boolean;
        Valido : Boolean;
        menaje : String(50);
    };

    action ActualizarDatoCliente(Cliente : String(10),
                                 Sucursal : Integer,
                                 Usuario : String(10),
                                 Nombre : String(100),
                                 DomicilioAnterior : String(148),
                                 Domiciolio : String(148),
                                 NumExt : String(20),
                                 NumInt : String(20),
                                 Cruces : String(100),
                                 Colonia : String(100),
                                 Estado : String(50),
                                 Poblacion : String(100),
                                 CP : String(5),
                                 TelFijo : String(10),
                                 TelMovil : String(10),
                                 Email : String(100),
                                 Dominio : String(100),
                                 Comentarios : String(200),
                                 IdCteCto : Integer,
                                 Nomina : String(20),
                                 IdAval : Integer)                  returns {
        conpleto : Boolean;
        Valido : Boolean;
        menaje : String(50);
    };

    action ExisteAsignacionCliente(Cliente : String(10))            returns {
        registros : Integer;
    };

    action ExisteMaviRecuperacionLocalizacion(Cliente : String(10)) returns {
        registros : Integer;
    };

    action GestorCobranza(Cliente : String(10))                     returns {
        registros : Integer;
    };

    action MaviRecuperacionAvalLocalizaciones(Cliente : String(10)) returns {
        registros : Integer;
    };

    action PromesaPagoBasico(Cliente : String(10))                  returns {
        NombreAgente : String(100);
        Nomina : String(100);
        MontoPromesa : Integer;
        FechaPromesa : Date;

    };

}
