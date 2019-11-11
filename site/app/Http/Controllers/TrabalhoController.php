<?php

namespace App\Http\Controllers;

class TrabalhoController extends Controller
{
    public function index($id)
    {
        // Realiza um get, buscando o trabalho (article) com o id = $id
        $jsonTrabalho = '
            {
                "id": 123456,
                "event_id": 123,
                "title": "WSFTA: uma arquitetura para tolerância a faltas em serviços web",
                "abstract": "A grande vantagem na utilização de ServiçosWeb para concepção de sistemas distribuídos é a interoperabilidade que essa tecnologia proporciona [Ayala et al., 2002]. Essa interoperabilidade facilita de forma significativa o desenvolvimento de aplicações distribuídas, já que problemas tais como a diversidade de hardwares e softwares são solucionados pelos protocolos utilizados por esses serviços [Newcomer, 2002]. Nesse sentido, Serviços Web têm sido amplamente utilizados para solucionar problemas de interoperabilidade entre aplicações e/ou tecnologias. Porém, as especificações e padrões definidos para Serviços Web não solucionam problemas relativos a tolerância a faltas dos serviços. A forma mais tradicional para tolerar faltas é a utilização de esquemas de replicação, provendo continuidade e disponibilidade aos serviços [Veríssimo and Rodrigues, 2001, Li et al., 2005]. Baseado nessa premissa, esse trabalho apresenta uma proposta de arquitetura de software para tolerância a faltas em Serviços Web. Essa arquitetura, chamada de WSFTA (Web Services Fault Tolerant Architecture), descreve de forma abstrata seus componentes e princípio de funcionamento, dividindo as responsabilidades e funcionalidades, presentes na arquitetura, entre esses componentes. Adicionalmente, este trabalho apresenta a especificação formal desses componentes, que possibilita a utilização de diferentes técnicas para comunicação de grupo, ordenação de mensagens, detecção e recuperação de falhas, proporcionando a flexibilidade necessária para que a arquitetura possa ser configurada para tratar as diversas classes de faltas presentes na literatura. Além disso, esse trabalho ainda apresenta uma implementação de referência e experimentos que possibilitam a comprovação de sua potencialidade de utilização no fornecimento de tolerância a faltas para Serviços Web.",
                "altabstract": "The major advantage of using Web Services for distributed system design is the interoperability this technology provides [Ayala et al., 2002]. This interoperability significantly facilitates the development of distributed applications, as problems such as hardware and software diversity are solved by the protocols used by these services [Newcomer, 2002]. In this sense, Web services have been widely used to solve interoperability problems between applications and / or technologies. However, the specifications and standards defined for Web Services do not solve service fault tolerance issues. The most traditional way to tolerate faults is the use of replication schemes, providing continuity and availability to services [Veríssimo and Rodrigues, 2001, Li et al., 2005]. Based on this premise, this paper presents a software architecture proposal for fault tolerance in Web Services. This architecture, called Web Services Fault Tolerant Architecture (WSFTA), abstractly describes its components and principle of operation, dividing responsibilities and functionalities present in the architecture between these components. Additionally, this paper presents the formal specification of these components, which allows the use of different techniques for group communication, message ordering, fault detection and recovery, providing the necessary flexibility so that the architecture can be configured to handle the various classes of communication. faults present in the literature. In addition, this work also presents a reference implementation and experiments that provide evidence of its potential use in providing fault tolerance for Web Services.",
                "keywords": "Ciência da Computação; TCC;",
                "tags": "Tag 01; Tag 02; Tag 03;",
                "year": "2008",
                "date": "04-11-2019",
                "language": "Português",
                "type": "TCC",
                "aproved": "true",
                "file": "arquivo",
                "url": "http://google.com"
            }
        ';
        // Decodifica retornando um array (não um stdClass)
        $aTrabalho = json_decode($jsonTrabalho, true);

        $aUsuario = ['firstname' => 'Mathias Artur', 'lastname' => 'Schulz'];

        $aCurso = ['name' => 'Ciência da Computação'];

        $aEvento = [
            'name' => '4C - Congresso Catarinense de Ciência da Computação',
            'year' => 2019,
            'url' => 'http://google.com'
        ];
        
        return view('trabalho', compact('aTrabalho', 'aUsuario', 'aCurso', 'aEvento'));
    }
}
