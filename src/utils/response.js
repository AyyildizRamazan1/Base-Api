class Response {
  constructor(data = null, message = null) {
    this.data = data;
    this.message = message;
  }

  success(res) {
    return res.status(200).json({
      success: true,
      data: this.data,
      message: this.message ?? "İşlem Başarılı",
    });
  }

  created(res) {
    return res.status(201).json({
      succes: true,
      data: this.data,
      message: this.message ?? "İşlem Başarılı",
    });
  }

  error500(res) {
    return res.status(500).json({
      succes: false,
      data: this.data,
      message: this.message ?? "İşlem Başarısız",
    });
  }
  error400(res) {
    return res.status(400).json({
      succes: false,
      data: this.data,
      message: this.message ?? "İşlem Başarısız",
    });
  }
  error401(res) {
    return res.status(401).json({
      succes: false,
      data: this.data,
      message: this.message ?? "Lütfen Oturum Açın !",
    });
  }
  error404(res) {
    return res.status(404).json({
      succes: false,
      data: this.data,
      message: this.message ?? "İşlem Başarısız!",
    });
  }
  error429(res) {
    return res.status(429).json({
      succes: false,
      data: this.data,
      message: this.message ?? "Çok Fazla İstek Atıldı !",
    });
  }
}

module.exports = Response;
