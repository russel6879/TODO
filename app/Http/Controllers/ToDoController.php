<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TODO;
class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data=TODO::orderby('id','desc')->get();
        if($data!=null){
            return['data'=>$data];
        }
        else{
            return response()->json([
                "message" => "Todo not found"
            ], 404); 
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([         
          
            'category_id' => 'required',         
            'todo' => 'required',         
        ]);
          
                $form= new TODO();             
                $form->category_id=$request->category_id;
                $form->todo=$request->todo;
                $form->save();
        return response()->json([
            "message" => "Successfully Created"
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data=TODO::where('category_id',$id)->get();
       
        if($data!=null){
            return['data'=>$data];
        }
        else{
            return response()->json([
                "message" => "Not found"
            ], 404); 
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(TODO::where('id', $id)->exists()) {
            $form = TODO::find($id);
            
            $form->delete();
            return response()->json([
              "message" => "records deleted."
            ], 202);
        } else {
            return response()->json([
              "message" => "Todos not found."
            ], 404);
        }
    }
}
