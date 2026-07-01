class JokesModel {
  final int id;
  final String title;
  final String content;

  JokesModel({
    required this.id,
    required this.title,
    required this.content
  });

  factory JokesModel.fromJson(Map<String, dynamic> json) {
    return JokesModel(

      // id: json['id'] is int ? json['id'] : int.parse('${json['id']}'),
      // title: json['title']?.toString() ?? '',
      // content: json['content']?.toString() ?? '',

      id: json['id'],
      title: json['title'],
      content: json['content'],
    );
  }
}