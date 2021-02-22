import React from "react";

import * as S from "./styles";

function SectionTestimonials() {
  return (
    <S.Container>
      <h2>O que nossos clientes dizem sobre nós</h2>

      <S.WrapTestimonials>
        <S.Testimonials>
          <img src="/images/testimonial-woman.png" alt="testemunha mulher" />

          <div className="info">
            <p>
              Nosso tempo de resposta diminuiu 80% e nossos clientes estão cada
              vez mais satisfeitos. Desde que começamos a usar o Rocketgram,
              recebemos cada vez mais feedbacks positivos sobreo nosso
              atendimento. Estamos muito felizes!
            </p>

            <small>Mary Jane Doe - Analista de Suporte na Digisac</small>
          </div>
        </S.Testimonials>

        <S.Testimonials>
          <img src="/images/testemonial-man.png" alt="testemunha homem" />

          <div className="info">
            <p>
              Nosso tempo de resposta diminuiu 80% e nossos clientes estão cada
              vez mais satisfeitos. Desde que começamos a usar o Rocketgram,
              recebemos cada vez mais feedbacks positivos sobreo nosso
              atendimento. Estamos muito felizes!
            </p>

            <small>Jhon Doe - Analista de Suporte na Digisac</small>
          </div>
        </S.Testimonials>
      </S.WrapTestimonials>
    </S.Container>
  );
}

export default React.memo(SectionTestimonials);
