<script lang="ts" setup>
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/select/filled-select.js";
import "@material/web/select/outlined-select.js";
import "@material/web/select/select-option.js";
import "@material/web/textfield/outlined-text-field.js";
import "@material/web/icon/icon.js";
</script>

<template>
  <div class="contact-form">
    <form action="https://fabform.io/f/t9wU9zj" method="post">
      <md-outlined-select name="onderwerp" label="Onderwerp / wandeling">
        <md-select-option aria-label="blank"></md-select-option>
        <md-select-option value="de-kleine-dommel-en-pannenkoeken-5km">
          <div>De Kleine Dommel en Pannenkoeken (5km)</div>
        </md-select-option>
      </md-outlined-select>

      <md-outlined-text-field name="naam" label="Naam">
        <md-icon>
          <template #leading-icon>person</template>
        </md-icon>
      </md-outlined-text-field>

      <md-outlined-text-field name="woonplaats" label="Woonplaats">
        <md-icon>
          <template #leading-icon>house</template>
        </md-icon>
      </md-outlined-text-field>

      <md-outlined-text-field
        name="telefoonnummer"
        type="tel"
        label="Telefoonnummer"
      >
        <md-icon>
          <template #leading-icon>phone</template>
        </md-icon>
      </md-outlined-text-field>

      <md-outlined-text-field
        name="email-adres"
        type="email"
        label="Email adres"
      >
        <md-icon>
          <template #leading-icon>email</template>
        </md-icon>
      </md-outlined-text-field>

      <md-outlined-text-field
        name="vragen-of-opmerkingen"
        type="textarea"
        label="Vragen of opmerkingen"
      >
        <md-icon>
          <template #leading-icon>chat</template>
        </md-icon>
      </md-outlined-text-field>

      <div class="row actions">
        <md-filled-button>Versturen</md-filled-button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;

  .row {
    display: flex;
    flex-direction: row;
    gap: 1rem;

    .cell {
      display: flex;
      flex-direction: row;
      gap: 1rem;
    }

    &.actions {
      justify-content: end;
    }
  }

  @media screen and (max-width: calc(960px / 2)) {
    .row {
      flex-direction: column;
    }
  }
}
</style>
