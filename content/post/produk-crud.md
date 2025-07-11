---
title: "Membuat CRUD Produk"
date: 2025-07-09
author: "Sukaroti"
author_title: "Senior Developer"
author_bio: "Pengembang dengan 10+ tahun pengalaman di PHP dan framework Laravel."
tags: ["Laravel", "PHP", "MySQL"]
avatar: /images/avatar.png
thumbnail: "/images/cover/laravel-11.png"
image: "/images/cover/laravel-11.png"
---
---

## Menambahkan Produk

Tambahkan kode berikut ke dalam controller:

{{< code title="ProdukController.php" lang="php" >}}
public function store(Request $request)
{
    $request->validate([
        'nama' => 'required|max:45',
        'jenis' => 'required|max:45',
        // ...
    ]);
}
{{< /code >}}

---

## Routing

Tambahkan routing ke dalam file `routes/web.php`:

{{< code title="web.php" lang="php" >}}
Route::get('/produk/edit/{id}', [ProdukController::class, 'edit']);
Route::put('/produk/update/{id}', [ProdukController::class, 'update']);
{{< /code >}}

---

## Menghapus Produk

Berikut controller untuk menghapus:

{{< code title="destroy method" lang="php" >}}
public function destroy(Produk $id)
{
    $id->delete();
    return redirect()->route('index.index')->with('success', 'Data berhasil dihapus');
}
{{< /code >}}
