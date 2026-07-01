import 'dart:convert';

import 'package:fullstack/models/jokes_model.dart';
import 'package:http/http.dart' as http;


class JokeapiServce {
  static const String baseURL="http://localhost:3000/api/jokes";

  Future <List<JokesModel>> fetchjokes() async{
    final response = await http.get(Uri.parse(baseURL));

    if(response.statusCode==200){

      final data=jsonDecode(response.body);

      return data
          .map<JokesModel>((e)=>JokesModel.fromJson(e))
          .toList();

    }

    throw Exception("Failed to load");

  }

}