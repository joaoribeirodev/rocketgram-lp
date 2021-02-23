import React from "react";
import Link from "next/link";

import Topic from "../Topic";

import * as S from "./styles";

function FAQ() {
  return (
    <S.Container>
      <h2>Dúvidas frequentes</h2>

      <S.Wrap>
        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />

        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />

        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />

        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />

        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />

        <Topic
          title="O Rocketgram oferece desconto por compra em volume?"
          description="Através do nosso simulador são concedidos descontos por volume, pensando em nossos clientes que têm maior número de grupos. Precisa de ajuda para montar o seu plano?. "
          destiny={{ to: "/", value: "Fale com nosso time de vendas" }}
        />
      </S.Wrap>

      <footer>
        <p>
          Não encontrou o que procurava?{" "}
          <Link href="/ajuda">Visite a nossa Central de Ajuda</Link>.
        </p>
      </footer>
    </S.Container>
  );
}

export default React.memo(FAQ);
