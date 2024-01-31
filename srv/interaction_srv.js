const cds = require('@sap/cds')

module.exports = function () {
  //const { Books } = this.entities

  this.on('ActualizarDireccionAval', async function (req) {

    let dbQuery = 'CALL "HDI_MAVIPOS1"."SPCREDIACTUALIZARDATOCLIENTE"(' +
      " OPC => 'ActualizarDireccionAval'," +
      ' CLIENTE => ' + "'" + req.data.Cliente + "'" + ',' +
      ' SUCURSAL => ' + req.data.Sucursal + ',' +
      ' USUARIO => ' + "'" + req.data.Usuario + "'" + ',' +
      ' NOMBRE => ' + "'" + req.data.Nombre + "'" + ',' +
      ' DOMICILIOANTERIOR => ' + "'" + req.data.DomicilioAnterior + "'" + ',' +
      ' DOMICIOLIO => ' + "'" + req.data.Domiciolio + "'" + ',' +
      ' NUMEXT => ' + "'" + req.data.NumExt + "'" + ',' +
      ' NUMINT => ' + "'" + req.data.NumInt + "'" + ',' +
      ' CRUCES => ' + "'" + req.data.Cruces + "'" + ',' +
      ' COLONIA => ' + "'" + req.data.Colonia + "'" + ',' +
      ' ESTADO => ' + "'" + req.data.Estado + "'" + ',' +
      ' POBLACION => ' + "'" + req.data.Poblacion + "'" + ',' +
      ' CP => ' + "'" + req.data.CP + "'" + ',' +
      ' TELFIJO => ' + "'" + req.data.TelFijo + "'" + ',' +
      ' TELMOVIL => ' + "'" + req.data.TelMovil + "'" + ',' +
      ' EMAIL => ' + "'" + req.data.Email + "'" + ',' +
      ' DOMINIO => ' + "'" + req.data.Dominio + "'" + ',' +
      ' COMENTARIOS => ' + "'" + req.data.Comentarios + "'" + ',' +
      ' IDCTECTO => ' + req.data.IdCteCto + ',' +
      ' NOMINA => ' + "'" + req.data.Nomina + "'" + ',' +
      ' IDAVAL => ' + req.data.IdAval + ',' +
      '	INSERTDATA => ?,' +
      ' VALIDO => ?' +
      ' )';

    let result = await cds.run(dbQuery)
    cds.log().info(result)

    let lv_valido = result.VALIDO

    let response = {
      conpleto: true,
      Valido: lv_valido
    };

    return response

  })

  this.on('ActualizarDireccionBeneficiario', async function (req) {

    let dbQuery = 'CALL "HDI_MAVIPOS1"."SPCREDIACTUALIZARDATOCLIENTE"(' +
      " OPC => 'ActualizarDireccionBeneficiario'," +
      ' CLIENTE => ' + "'" + req.data.Cliente + "'" + ',' +
      ' SUCURSAL => ' + req.data.Sucursal + ',' +
      ' USUARIO => ' + "'" + req.data.Usuario + "'" + ',' +
      ' NOMBRE => ' + "'" + req.data.Nombre + "'" + ',' +
      ' DOMICILIOANTERIOR => ' + "'" + req.data.DomicilioAnterior + "'" + ',' +
      ' DOMICIOLIO => ' + "'" + req.data.Domiciolio + "'" + ',' +
      ' NUMEXT => ' + "'" + req.data.NumExt + "'" + ',' +
      ' NUMINT => ' + "'" + req.data.NumInt + "'" + ',' +
      ' CRUCES => ' + "'" + req.data.Cruces + "'" + ',' +
      ' COLONIA => ' + "'" + req.data.Colonia + "'" + ',' +
      ' ESTADO => ' + "'" + req.data.Estado + "'" + ',' +
      ' POBLACION => ' + "'" + req.data.Poblacion + "'" + ',' +
      ' CP => ' + "'" + req.data.CP + "'" + ',' +
      ' TELFIJO => ' + "'" + req.data.TelFijo + "'" + ',' +
      ' TELMOVIL => ' + "'" + req.data.TelMovil + "'" + ',' +
      ' EMAIL => ' + "'" + req.data.Email + "'" + ',' +
      ' DOMINIO => ' + "'" + req.data.Dominio + "'" + ',' +
      ' COMENTARIOS => ' + "'" + req.data.Comentarios + "'" + ',' +
      ' IDCTECTO => ' + req.data.IdCteCto + ',' +
      ' NOMINA => ' + "'" + req.data.Nomina + "'" + ',' +
      ' IDAVAL => ' + req.data.IdAval + ',' +
      '	INSERTDATA => ?,' +
      ' VALIDO => ?' +
      ' )';

    let result = await cds.run(dbQuery)
    cds.log().info(result)

    let lv_valido = result.VALIDO

    let response = {
      conpleto: true,
      Valido: lv_valido
    };

    return response

  })
  
  this.on('ActualizarDireccionCliente', async function (req) {

    let dbQuery = 'CALL "HDI_MAVIPOS1"."SPCREDIACTUALIZARDATOCLIENTE"(' +
      " OPC => 'ActualizarDireccionCliente'," +
      ' CLIENTE => ' + "'" + req.data.Cliente + "'" + ',' +
      ' SUCURSAL => ' + req.data.Sucursal + ',' +
      ' USUARIO => ' + "'" + req.data.Usuario + "'" + ',' +
      ' NOMBRE => ' + "'" + req.data.Nombre + "'" + ',' +
      ' DOMICILIOANTERIOR => ' + "'" + req.data.DomicilioAnterior + "'" + ',' +
      ' DOMICIOLIO => ' + "'" + req.data.Domiciolio + "'" + ',' +
      ' NUMEXT => ' + "'" + req.data.NumExt + "'" + ',' +
      ' NUMINT => ' + "'" + req.data.NumInt + "'" + ',' +
      ' CRUCES => ' + "'" + req.data.Cruces + "'" + ',' +
      ' COLONIA => ' + "'" + req.data.Colonia + "'" + ',' +
      ' ESTADO => ' + "'" + req.data.Estado + "'" + ',' +
      ' POBLACION => ' + "'" + req.data.Poblacion + "'" + ',' +
      ' CP => ' + "'" + req.data.CP + "'" + ',' +
      ' TELFIJO => ' + "'" + req.data.TelFijo + "'" + ',' +
      ' TELMOVIL => ' + "'" + req.data.TelMovil + "'" + ',' +
      ' EMAIL => ' + "'" + req.data.Email + "'" + ',' +
      ' DOMINIO => ' + "'" + req.data.Dominio + "'" + ',' +
      ' COMENTARIOS => ' + "'" + req.data.Comentarios + "'" + ',' +
      ' IDCTECTO => ' + req.data.IdCteCto + ',' +
      ' NOMINA => ' + "'" + req.data.Nomina + "'" + ',' +
      ' IDAVAL => ' + req.data.IdAval + ',' +
      '	INSERTDATA => ?,' +
      ' VALIDO => ?' +
      ' )';

    let result = await cds.run(dbQuery)
    cds.log().info(result)

    let lv_valido = result.VALIDO

    let response = {
      conpleto: true,
      Valido: lv_valido
    };

    return response

  })
  
  this.on('ActualizarDatoBeneficiarioNipGenerico', async function (req) {

    let dbQuery = 'CALL "HDI_MAVIPOS1"."SPCREDIACTUALIZARDATOCLIENTE"(' +
      " OPC => 'ActualizarDatoBeneficiarioNipGenerico'," +
      ' CLIENTE => ' + "'" + req.data.Cliente + "'" + ',' +
      ' SUCURSAL => ' + req.data.Sucursal + ',' +
      ' USUARIO => ' + "'" + req.data.Usuario + "'" + ',' +
      ' NOMBRE => ' + "'" + req.data.Nombre + "'" + ',' +
      ' DOMICILIOANTERIOR => ' + "'" + req.data.DomicilioAnterior + "'" + ',' +
      ' DOMICIOLIO => ' + "'" + req.data.Domiciolio + "'" + ',' +
      ' NUMEXT => ' + "'" + req.data.NumExt + "'" + ',' +
      ' NUMINT => ' + "'" + req.data.NumInt + "'" + ',' +
      ' CRUCES => ' + "'" + req.data.Cruces + "'" + ',' +
      ' COLONIA => ' + "'" + req.data.Colonia + "'" + ',' +
      ' ESTADO => ' + "'" + req.data.Estado + "'" + ',' +
      ' POBLACION => ' + "'" + req.data.Poblacion + "'" + ',' +
      ' CP => ' + "'" + req.data.CP + "'" + ',' +
      ' TELFIJO => ' + "'" + req.data.TelFijo + "'" + ',' +
      ' TELMOVIL => ' + "'" + req.data.TelMovil + "'" + ',' +
      ' EMAIL => ' + "'" + req.data.Email + "'" + ',' +
      ' DOMINIO => ' + "'" + req.data.Dominio + "'" + ',' +
      ' COMENTARIOS => ' + "'" + req.data.Comentarios + "'" + ',' +
      ' IDCTECTO => ' + req.data.IdCteCto + ',' +
      ' NOMINA => ' + "'" + req.data.Nomina + "'" + ',' +
      ' IDAVAL => ' + req.data.IdAval + ',' +
      '	INSERTDATA => ?,' +
      ' VALIDO => ?' +
      ' )';

    let result = await cds.run(dbQuery)
    cds.log().info(result)

    let lv_valido = result.VALIDO

    let response = {
      conpleto: true,
      Valido: lv_valido
    };

    return response

  })
  
  this.on('ActualizarDatoCliente', async function (req) {

    let dbQuery = 'CALL "HDI_MAVIPOS1"."SPCREDIACTUALIZARDATOCLIENTE"(' +
      " OPC => 'ActualizarDatoCliente'," +
      ' CLIENTE => ' + "'" + req.data.Cliente + "'" + ',' +
      ' SUCURSAL => ' + req.data.Sucursal + ',' +
      ' USUARIO => ' + "'" + req.data.Usuario + "'" + ',' +
      ' NOMBRE => ' + "'" + req.data.Nombre + "'" + ',' +
      ' DOMICILIOANTERIOR => ' + "'" + req.data.DomicilioAnterior + "'" + ',' +
      ' DOMICIOLIO => ' + "'" + req.data.Domiciolio + "'" + ',' +
      ' NUMEXT => ' + "'" + req.data.NumExt + "'" + ',' +
      ' NUMINT => ' + "'" + req.data.NumInt + "'" + ',' +
      ' CRUCES => ' + "'" + req.data.Cruces + "'" + ',' +
      ' COLONIA => ' + "'" + req.data.Colonia + "'" + ',' +
      ' ESTADO => ' + "'" + req.data.Estado + "'" + ',' +
      ' POBLACION => ' + "'" + req.data.Poblacion + "'" + ',' +
      ' CP => ' + "'" + req.data.CP + "'" + ',' +
      ' TELFIJO => ' + "'" + req.data.TelFijo + "'" + ',' +
      ' TELMOVIL => ' + "'" + req.data.TelMovil + "'" + ',' +
      ' EMAIL => ' + "'" + req.data.Email + "'" + ',' +
      ' DOMINIO => ' + "'" + req.data.Dominio + "'" + ',' +
      ' COMENTARIOS => ' + "'" + req.data.Comentarios + "'" + ',' +
      ' IDCTECTO => ' + req.data.IdCteCto + ',' +
      ' NOMINA => ' + "'" + req.data.Nomina + "'" + ',' +
      ' IDAVAL => ' + req.data.IdAval + ',' +
      '	INSERTDATA => ?,' +
      ' VALIDO => ?' +
      ' )';

    let result = await cds.run(dbQuery)
    cds.log().info(result)

    let lv_valido = result.VALIDO

    let response = {
      conpleto: true,
      Valido: lv_valido
    };

    return response

  })

}