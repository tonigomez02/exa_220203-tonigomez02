@extends("layouts.contactos")

@section("content")

    <div class="container-sm px-md-5">

        <div class="container" id="form_articles">
            <div class="mb-3">
                <label for="" class="form-label">@lang("Nombre")</label>
                <input id="nombre" name="nombre" type="text" class="form-control" value="{{$contacto->nombre}}">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">@lang("Telefono")</label>
                <input id="telefono" name="telefono" type="text" class="form-control" value="{{$contacto->telefono}}">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">@lang("Numero de libros")</label>
                <input id="num_libros" name="num_libros" type="text" class="form-control" value="{{$contacto->num_libros}}">
            </div>
            <div class="mb-3">
                <label for="" class="form-label">@lang("Fecha de nacimiento")</label>
                <input id="fecha_nacimiento" name="fecha_nacimiento" type="date" value="{{$contacto->fecha_nacimiento}}" class="form-control">
            </div>
            <a href="{{route("contactos.index")}}" class="btn btn-secondary">@lang("Cancel")</a>
            <button id="button_form" onclick="apiEdit({{$contacto->id}})" class="btn btn-primary">@lang("Save")</button>
        </div>

    </div>

@endsection
