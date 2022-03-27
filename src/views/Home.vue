<template>
  <div>
    <ToolbarAuth />
    <report />
    <error-report />
    <div class="ma-0 pa-0">
      <v-row no-gutters>
        <v-col cols="12" md="6" class="accent d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <div v-if="this.step === 1">
              <div v-if="formal">
                <h3>
                  {{ textIntro[1].header }}
                </h3>
                <br />
                {{ textIntro[1].texta }}
                <br /><br />
                {{ textIntro[1].textb }}
                <br /><br />
                {{ textIntro[1].textc }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[1].headerInf }}
                </h3>
                <br />
                {{ textIntro[1].textaInf }}
                <br /><br />
                {{ textIntro[1].textbInf }}
                <br /><br />
                {{ textIntro[1].textcInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>

            <div v-if="this.step === 2">
              <div v-if="formal">
                <h3>
                  {{ textIntro[2].header }}
                </h3>
                <br />
                {{ textIntro[2].texta }}
                <br /><br />
                {{ textIntro[2].textb }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[2].headerInf }}
                </h3>
                <br />
                {{ textIntro[2].textaInf }}
                <br /><br />
                {{ textIntro[2].textbInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 3">
              <div v-if="formal">
                <h3>
                  {{ textIntro[3].header }}
                </h3>
                <br />
                {{ textIntro[3].texta }}
                <br /><br />
                {{ textIntro[3].textb }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[3].headerInf }}
                </h3>
                <br />
                {{ textIntro[3].textaInf }}
                <br /><br />
                {{ textIntro[3].textbInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 4">
              <div v-if="formal">
                <h3>
                  {{ textIntro[4].header }}
                </h3>
                <br />
                {{ textIntro[4].texta }}
                <br /><br />
                {{ textIntro[4].textb }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[4].headerInf }}
                </h3>
                <br />
                {{ textIntro[4].textaInf }}
                <br /><br />
                {{ textIntro[4].textbInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 5">
              <div v-if="formal">
                <h3>
                  {{ textIntro[5].header }}
                </h3>
                <br />
                {{ textIntro[5].texta }}
                <br /><br />
                {{ textIntro[5].textb }}
                <br /><br />
                {{ textIntro[5].textc }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[5].headerInf }}
                </h3>
                <br />
                {{ textIntro[5].textaInf }}
                <br /><br />
                {{ textIntro[5].textbInf }}
                <br /><br />
                {{ textIntro[5].textcInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 6">
              <div v-if="formal">
                <h3>
                  {{ textIntro[6].header }}
                </h3>
                <br />
                {{ textIntro[6].texta }}
                <br /><br />
                {{ textIntro[6].textb }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[6].headerInf }}
                </h3>
                <br />
                {{ textIntro[6].textaInf }}
                <br /><br />
                {{ textIntro[6].textbInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 7">
              <div v-if="formal">
                <h3>
                  {{ textIntro[7].header }}
                </h3>
                <br />
                {{ textIntro[7].texta }}
                <br /><br />
                {{ textIntro[7].textb }}
                <br /><br />
                {{ textIntro[7].textc }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[7].headerInf }}
                </h3>
                <br />
                {{ textIntro[7].textaInf }}
                <br /><br />
                {{ textIntro[7].textbInf }}
                <br /><br />
                {{ textIntro[7].textcInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
            <div v-if="this.step === 8">
              <div v-if="formal">
                <h3>
                  {{ textIntro[8].header }}
                </h3>
                <br />
                {{ textIntro[8].texta }}
                <br /><br />
                {{ textIntro[8].textb }}
                <br /><br />
                {{ textIntro[8].textc }}
                <br /><br />
                {{ textIntro[8].textd }}
                <br /><br />
                {{ textIntro[8].texte }}
                <br /><br />
                {{ firstNameUser }} {{ lastNameUser }} <br /><br />
                {{ textIntro[8].textf }}
                {{ textIntro[8].textg }}
                <br /><br />
              </div>
              <div v-if="!formal">
                <h3>
                  {{ textIntro[8].headerInf }}
                </h3>
                <br />
                {{ textIntro[8].textaInf }}
                <br /><br />
                {{ textIntro[8].textbInf }}
                <br /><br />
                {{ textIntro[8].textcInf }}
                <br /><br />
                {{ textIntro[8].textdInf }}
                <br /><br />
                {{ textIntro[8].texteInf }}
                <br /><br />
                {{ firstNameUser }} {{ lastNameUser }} <br /><br />
                {{ textIntro[8].textfInf }}
                {{ textIntro[8].textgInf }}
                <br /><br />
              </div>
              <div class="d-none d-md-flex d-lg-flex">
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
                <br /><br />
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center">
          <v-card class="ma-10 transparent" outlined width="100%">
            <step-text
              :stepText="textIntro[1].header"
              :number="1"
              class="mb-5"
              :kleur="colorStep1"
            />

            <div id="step1" v-if="this.step === 1">
              <CustomDivider />
              <div v-if="formal">
                <StatementText :statement="textIntro[1].textc" />
              </div>
              <div v-if="!formal">
                <StatementText :statement="textIntro[1].textcInf" />
              </div>
              <ta-slider2 v-model="sl_a" />

              <CustomDivider />

              <v-row class="mt-10">
                <v-spacer />
                <btn-continue :on-click="endStep1" />
              </v-row>
            </div>
            <step-text
              :stepText="textIntro[2].header"
              :number="2"
              class="mb-5"
              :kleur="colorStep2"
            />
            <div id="step2" v-if="this.step === 2">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[2].textb" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[2].textbInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group
                      v-model="question_b"
                      :succes="valid"
                      :error-messages="errors"
                    >
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <div v-if="question_b === 'ke2'">
                    <div v-if="formal">
                      <StatementText
                        :statement="'De volgende vraag (juridische vertegenwoordiging) is niet voor u van toepassing en wordt overgeslagen'"
                      ></StatementText>
                    </div>
                    <div v-if="!formal">
                      <StatementText
                        :statement="'De volgende vraag (juridische vertegenwoordiging) is niet voor jou van toepassing en wordt overgeslagen'"
                      ></StatementText>
                    </div>
                  </div>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep2" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep2)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[3].header"
              :number="3"
              class="mb-5"
              :kleur="colorStep3"
            />
            <div id="step3" v-if="this.step === 3">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[3].textb" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[3].textbInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group v-model="question_c" :succes="valid">
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                      <v-radio value="ke3" color="info">
                        <template v-slot:label>Weet niet / onbekend </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <div v-if="question_b === 'ke1'">
                    <div v-if="formal">
                      <StatementText
                        :statement="'Aangezien u al een opvolger heeft aangesteld is de volgende vraag niet voor u van toepassing en wordt overgeslagen.'"
                      ></StatementText>
                    </div>
                    <div v-if="!formal">
                      <StatementText
                        :statement="'Aangezien u al een opvolger heeft aangesteld is de volgende vraag niet voor u van toepassing en wordt overgeslagen.'"
                      ></StatementText>
                    </div>
                  </div>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep3" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep3)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>

            <step-text
              :stepText="textIntro[4].header"
              :number="4"
              class="mb-5"
              :kleur="colorStep4"
            />
            <div id="step4" v-if="this.step === 4">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[4].textb" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[4].textbInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group v-model="question_d" :succes="valid">
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                      <v-radio value="ke3" color="info">
                        <template v-slot:label>Weet niet / onbekend </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep4" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep4)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[5].header"
              :number="5"
              class="mb-5"
              :kleur="colorStep5"
            />
            <div id="step5" v-if="this.step === 5">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[5].textc" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[5].textcInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group v-model="question_e" :succes="valid">
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep5" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep5)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[6].header"
              :number="6"
              class="mb-5"
              :kleur="colorStep6"
            />
            <div id="step6" v-if="this.step === 6">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[6].textb" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[6].textbInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group v-model="question_f" :succes="valid">
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep6" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep6)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>
            <step-text
              :stepText="textIntro[7].header"
              :number="7"
              class="mb-5"
              :kleur="colorStep7"
            />
            <div id="step7" v-if="this.step === 7">
              <ValidationObserver
                ref="obs"
                v-slot="{ invalid, validate, handleSubmit }"
              >
                <v-form ref="form">
                  <CustomDivider />
                  <div v-if="formal">
                    <StatementText :statement="textIntro[7].textc" />
                  </div>
                  <div v-if="!formal">
                    <StatementText :statement="textIntro[7].textcInf" />
                  </div>
                  <ValidationProvider
                    rules="required"
                    v-slot="{ errors, valid }"
                  >
                    <v-radio-group v-model="question_g" :succes="valid">
                      <v-radio value="ke1" color="info">
                        <template v-slot:label> Ja </template>
                      </v-radio>
                      <v-radio value="ke2" color="info">
                        <template v-slot:label> Nee </template>
                      </v-radio>
                      <v-radio value="ke3" color="info">
                        <template v-slot:label>Weet niet / onbekend </template>
                      </v-radio>
                    </v-radio-group>
                  </ValidationProvider>
                  <CustomDivider />
                  <v-row class="mt-10">
                    <v-spacer />
                    <btnback :on-click="backStep7" />
                    <v-btn
                      color="accent"
                      small
                      class="mb-5 mr-8"
                      @click="handleSubmit(endStep7)"
                      :disabled="invalid || !validate"
                      >Verder</v-btn
                    >
                  </v-row>
                </v-form>
              </ValidationObserver>
            </div>

            <step-text
              :stepText="textIntro[8].header"
              :number="8"
              class="mb-5"
              :kleur="colorStep8"
            />
            <div id="step8" v-if="this.step === 8">
              <CustomDivider />
              <v-row class="mt-10 mb-10 justify-center">
                <v-btn
                  color="info"
                  x-large
                  :disabled="disableBtnReport"
                  @click="getReport"
                  >rapportage</v-btn
                >
              </v-row>
              <CustomDivider />
              <v-row class="mt-10 mb-10">
                <v-spacer></v-spacer>
                <btnback :on-click="backStep8" />
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import ToolbarAuth from "@/components/core/Toolbar";
import textData from "@/text/textApp.json";
import BtnCont from "@/components/buttons/BtnCont";
import TaSlider2 from "@/components/core/ta-slider2";
// import ResultService from "@/services/ResultService";
import StepText from "@/components/stepText";
import StatementText from "@/components/StatementText";
import Btnback from "@/components/BtnBack";
import CustomDivider from "@/components/CustomDivider";
import { ValidationObserver } from "vee-validate";
import { ValidationProvider } from "vee-validate";
import ResultService from "@/services/ResultService";
import Report from "@/components/core/report";
import AuthService from "@/services/AuthService";
import errorReport from "@/components/core/errorReport";
export default {
  name: "Home",
  components: {
    Report,
    "btn-continue": BtnCont,
    ToolbarAuth,
    CustomDivider,
    Btnback,
    StatementText,
    StepText,
    TaSlider2,
    ValidationObserver,
    ValidationProvider,
    errorReport,
  },
  data() {
    return {
      firstNameUser: null,
      lastNameUser: null,
      formal: true,
      sl_a: 0,
      question_b: "",
      question_c: "",
      question_d: "",
      question_e: "",
      question_f: "",
      question_g: "",
      textIntro: textData,
      disableBtn: false,
      valid2: false,
      valid3: false,
      valid4: false,
      colorStep0: "accent",
      colorStep1: "accent",
      colorStep2: "accent",
      colorStep3: "accent",
      colorStep4: "accent",
      colorStep5: "accent",
      colorStep6: "accent",
      colorStep7: "accent",
      colorStep8: "accent",
      step: 1,
      saving: false,
      loading: false,
      loading1: false,
      error: null,
      kel1: "ja",
      kel2: "nee",
      kel3: "wellicht",
      disableBtnReport: false,
    };
  },
  methods: {
    async endStep1() {
      await this.$vuetify.goTo(0);
      this.step++;
    },
    async endStep2() {
      await this.$vuetify.goTo(0);
      if (this.question_b === "ke1") {
        this.step++;
      } else {
        this.step = this.step + 2;
      }
    },
    async endStep3() {
      await this.$vuetify.goTo(0);
      this.step = this.step + 2;
    },
    async endStep4() {
      await this.$vuetify.goTo(0);
      if (this.question_b === "ke1") {
        this.step = this.step + 2;
      } else {
        this.step++;
      }
    },
    async endStep5() {
      await this.$vuetify.goTo(0);
      this.step++;
    },
    async endStep6() {
      await this.$vuetify.goTo(0);
      this.step++;
    },
    async endStep7() {
      await this.$vuetify.goTo(0);
      this.step++;
    },
    async endStep8() {
      await this.$vuetify.goTo(0);
      this.step++;
    },
    async backStep2() {
      await this.$vuetify.goTo(0);
      this.step--;
    },
    async backStep3() {
      await this.$vuetify.goTo(0);
      this.step--;
    },
    async backStep4() {
      await this.$vuetify.goTo(0);
      if (this.question_b === "ke2") {
        this.step = this.step - 2;
      } else {
        this.step--;
      }
    },
    async backStep5() {
      await this.$vuetify.goTo(0);
      if (this.question_b === "ke1") {
        this.step = this.step - 2;
      } else {
        this.step--;
      }
    },
    async backStep6() {
      await this.$vuetify.goTo(0);
      this.step--;
    },
    async backStep7() {
      await this.$vuetify.goTo(0);
      this.step--;
    },
    async backStep8() {
      await this.$vuetify.goTo(0);
      this.step--;
    },
    sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
    async getReport() {
      // eslint-disable-next-line
      console.log("gaat goed");
      const payload = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
        sl_a: this.sl_a,
        question_b: this.question_b,
        question_c: this.question_c,
        question_d: this.question_d,
        question_e: this.question_e,
        question_f: this.question_f,
        question_g: this.question_g,
      };
      const payloadLog = {
        clientId: JSON.parse(localStorage.getItem("clientId")),
      };
      try {
        this.disableBtnReport = true;
        await ResultService.getReport(payload);
        // eslint-disable-next-line no-undef
        await EventBus.$emit("reportSend", true);
        await this.sleep(3000);
        await AuthService.logout(payloadLog);
        localStorage.removeItem("clientId");
        localStorage.removeItem("firstNameClient");
        localStorage.removeItem("lastNameClient");
        localStorage.removeItem("emailClient");
        localStorage.removeItem("firstNameUser");
        localStorage.removeItem("lastNameUser");
        localStorage.removeItem("formal");
        localStorage.removeItem("token");
        this.$router.push({ path: "/Start" });
      } catch (error) {
        // eslint-disable-next-line no-undef
        EventBus.$emit("errReport", true);
        this.disableBtnReport = false;
      }
    },
  },
  watch: {
    step: function () {
      if (this.step === 0) {
        this.colorStep0 = "info";
      } else if (this.step === 1) {
        this.colorStep0 = "accent";
        this.colorStep1 = "info";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 2) {
        this.colorStep1 = "accent";
        this.colorStep2 = "info";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 3) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "info";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 4) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "info";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 5) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "info";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 6) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "info";
        this.colorStep7 = "accent";
        this.colorStep8 = "accent";
      } else if (this.step === 7) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "info";
        this.colorStep8 = "accent";
      } else if (this.step === 8) {
        this.colorStep1 = "accent";
        this.colorStep2 = "accent";
        this.colorStep3 = "accent";
        this.colorStep4 = "accent";
        this.colorStep5 = "accent";
        this.colorStep6 = "accent";
        this.colorStep7 = "accent";
        this.colorStep8 = "info";
        this.colorStep9 = "accent";
      } else if (this.step === 9) {
        this.colorStep8 = "accent";
        this.colorStep9 = "info";
      }
    },
  },
  mounted() {
    this.formal = JSON.parse(localStorage.getItem("formal"));
    this.clientId = JSON.parse(localStorage.getItem("clientId"));
    this.firstNameUser = JSON.parse(localStorage.getItem("firstNameUser"));
    this.lastNameUser = JSON.parse(localStorage.getItem("lastNameUser"));
  },
};
</script>
