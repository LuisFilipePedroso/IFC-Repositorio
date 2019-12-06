<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NovoTrabalhoController extends Controller
{
    public function index()
    {
        return view('novotrabalho');
    }

    public function store(Request $request) {
        // dd($request);
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);

        // dd($request->file('userfile')->getClientOriginalName());

        // $nomeArquivo = null;
        // if ($request->hasFile('conteudo') && $request->file('conteudo')->isValid()) {
        //     $extensao = $request->file('conteudo')->extension();
        //     $uniqueId = uniqid(date('HisYmd'));
        //     $nomeArquivo = 'conteudo-'.$uniqueId.'.'.$extensao;
        //     $upload = $request->file('conteudo')->storeAs('arquivos', $nomeArquivo);

        //     if (!$upload) {
        //         return redirect()
        //                     ->back()
        //                     ->with('error', 'Falha ao fazer upload')
        //                     ->withInput();
        //     }
        // }

        $upload = $request->file('userfile')->storeAs('arquivos', $request->file('userfile')->getClientOriginalName());

        // $response = $client->request('POST', '/files', [
        //     \GuzzleHttp\RequestOptions::JSON => [
        //         "name" => $request->file('userfile')->getClientOriginalName(),
        //         "path" => 'files/'.$request->file('userfile')->getClientOriginalName()
        //     ]
        // ]);
        
        $response = $client->request('POST', '/articles', [
            \GuzzleHttp\RequestOptions::JSON => [
                "title" => $request->get('titulo'),
                "abstract"=> $request->get('abstract'),
                "altabstract" => $request->get('abstract'),
                "keywords" => $request->get('palavras-chave'),
                "tags" => $request->get('tags'),
                "year" => explode('-', $request->get('data'))[0],
                "date" => $request->get('data'),
                "language" => $request->get('idioma'),
                "type" => "ARTIGO_CIENTIFICO",
                "aproved" => false,
                "url" => "",
                "event_id" => 1,
                "users_id" => [auth()->user()->id],
                "user_article_type" => "AUTOR",
                "courses_id" => [1]
            ]
        ]);

        return redirect('/upload');
    }
}
