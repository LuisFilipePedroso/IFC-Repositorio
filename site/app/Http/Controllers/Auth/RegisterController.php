<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'firstname' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'lattes' => ['required', 'string', 'max:255'],
            'birthday' => ['required'],
            'type' => ['required'],
            'registration_id' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:5', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        // dd($data);
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'localhost:3333',
            'timeout'  => 2.0,
        ]);

        $response = $client->request('POST', '/users', [
            \GuzzleHttp\RequestOptions::JSON => [
                "registration_id" => $data['registration_id'],
                "username"=> $data['username'],
                "password" => $data['password'],
                "firstname" => $data['firstname'],
                "lastname" => $data['lastname'], 
                "type" => $data['type'],
                "siape" => 123,
                "lattes" => $data['lattes'],
                "email" => $data['email'],
                "birthday" => $data['birthday'],
            ]
        ]);

        // $credenciais = [
        //     "email" =>  $data['email'],
        //     "password" => $data['password']
        // ];

        $user = User::where('email', '=', $data['email'])->first();

        return Auth::login($user);
    }
}
