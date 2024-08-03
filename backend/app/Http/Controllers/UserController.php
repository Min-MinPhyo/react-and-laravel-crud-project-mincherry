<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{

    public function index()
    {
        return response()->json(User::latest()->get());
    }

    public function create()
    {

    }


    public function store(Request $request)
    {
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password)
        ]);
        return response()->json('successfully create user',200);

    }


    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        return response()->json(User::whereId($id)->first());
    }

    public function update(Request $request, $id)
    {

        $user=User::whereId($id)->first();

        $user->update([
            'name'=>$request->name,
            'email'=>$request->email
        ]);
        return response()->json('success update');

    }

    public function destroy($id)
    {
        User::whereId($id)->first()->delete();

        return response()->json('successfully delete user data');
    }
}



