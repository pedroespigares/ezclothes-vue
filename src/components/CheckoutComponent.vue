<template>
  <div class="container">
    <section id="checkout--payment">
      <h1>Checkout - Datos de envío y pago</h1>
      <div class="checkout--container">
        <div class="checkout--form">
          <form class="checkout--form--container">
            <div class="shipment">
              <h3>Envío</h3>
              <input
                id="checkout--name"
                name="checkout--name"
                type="text"
                placeholder="Nombre"
                required
              />
              <input
                id="checkout--surname"
                name="checkout--surname"
                type="text"
                placeholder="Apellidos"
                required
              />
              <input
                id="checkout--phone"
                name="checkout--phone"
                type="tel"
                placeholder="Teléfono (123456789)"
                pattern="[0-9]{9}"
                required
              />
              <input
                id="checkout--mail"
                name="checkout--mail"
                type="email"
                placeholder="correo@dominio.com"
                required
              />
              <input
                id="checkout--address"
                name="checkout--address"
                type="text"
                placeholder="Dirección"
                required
              />
              <input
                id="checkout--city"
                name="checkout--city"
                type="text"
                placeholder="Ciudad"
                required
              />
              <input
                id="checkout--postal"
                name="checkout--postal"
                type="text"
                placeholder="Código postal"
                required
              />
              <input
                id="checkout--country"
                name="checkout--country"
                type="text"
                placeholder="País"
                required
              />
            </div>
            <div class="payment">
              <h3>Pago</h3>
              <input
                id="payment--titular"
                name="payment--titular"
                type="text"
                placeholder="Titular"
                required
              />
              <input
                id="payment--number"
                name="payment--number"
                type="text"
                placeholder="Número de tarjeta (16 dígitos)"
                maxlength="16"
                pattern="^[0-9]{16}$"
                required
              />
              <div>
                <select name="month" id="months">
                  <option hidden selected value="MM">Mes</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <select name="year" id="years">
                  <option hidden selected value="YY">Año</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                </select>
              </div>
              <input
                id="payment--cvv"
                name="payment--cvv"
                type="text"
                placeholder="CVV"
                maxlength="3"
                required
              />
              <p id="buy--message">¡Compra confirmada! Consulte su correo</p>
              <button class="payment" type="submit">Pagar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
