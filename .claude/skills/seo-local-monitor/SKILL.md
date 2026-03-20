---
name: seo-local-monitor
description: >
  Audita el SEO local de HCB Studio para la búsqueda "barberia valdivia".
  Úsala siempre que el usuario pregunte cómo está el sitio en Google, pida revisar
  el posicionamiento local, diga "revisa el SEO", "¿cómo estamos en Google?",
  "chequea el posicionamiento", "analiza el SEO local", o después de editar
  src/data/site.ts. Entrega un puntaje numérico y un checklist accionable.
---

# SEO Local Monitor — HCB Studio

Audita el posicionamiento de `hcbstudio.cl` para la búsqueda "barberia valdivia" y entrega un informe con puntaje y recomendaciones concretas.

## Pasos

### 1. Leer el estado actual del sitio

Lee los siguientes archivos:
- `src/data/site.ts` — fuente de todos los datos SEO, NAP y schema
- `astro.config.mjs` — para verificar que el sitemap está configurado

### 2. Buscar en la web

Usa WebSearch con la consulta exacta: `barberia valdivia`

Registra:
- ¿Aparece `hcbstudio.cl` entre los primeros 10 resultados orgánicos?
- ¿Aparece en Google Maps / Local Pack?
- ¿Qué competidores aparecen antes?

### 3. Auditar los factores SEO

Evalúa cada factor con ✅ (cumple), ⚠️ (cumple parcialmente) o ❌ (no cumple):

**Metadatos on-page** (lee `seo` en site.ts)
- [ ] `title` contiene "Valdivia" y la keyword principal ("barberia" o "barbero")
- [ ] `description` menciona ciudad + servicio + CTA (≥ 120 y ≤ 160 caracteres)
- [ ] `keywords` array incluye variantes de "barberia valdivia"

**Schema JSON-LD** (lee `businessJsonLd` en site.ts)
- [ ] `@type` es `BarberShop`
- [ ] `name`, `telephone`, `email` presentes y correctos
- [ ] `address` con `streetAddress`, `addressLocality: "Valdivia"`, `addressCountry: "CL"`
- [ ] `openingHoursSpecification` definido
- [ ] `areaServed` incluye "Valdivia"
- [ ] `geo` con coordenadas (`latitude`/`longitude`) — **campo crítico para Google Maps**

**NAP (Name, Address, Phone) — consistencia**
- [ ] Nombre de negocio igual en `brand.name` y `businessJsonLd.name`
- [ ] Teléfono presente y en formato E.164 o local estándar chileno
- [ ] Dirección completa con número de calle

**Contenido local**
- [ ] Testimonios/reseñas presentes en el sitio (`testimonials.items`)
- [ ] El texto del sitio menciona "Valdivia" en múltiples secciones (no solo metadatos)
- [ ] Integración con Google Maps (embed en `location.mapEmbedUrl`)

**Configuración técnica** (lee `astro.config.mjs`)
- [ ] `site` configurado con la URL de producción (necesario para el sitemap)
- [ ] Booking URL configurada (`bookingUrl`)
- [ ] WhatsApp configurado (`whatsappPhone`) — canal de contacto local importante

### 4. Calcular el puntaje

Asigna puntos:
- ✅ = 1 punto
- ⚠️ = 0.5 puntos
- ❌ = 0 puntos

Total sobre el número de factores × 100 = **SEO Score XX/100**

### 5. Entrega el informe

Usa exactamente este formato:

```
## Informe SEO Local — HCB Studio
**Búsqueda objetivo:** "barberia valdivia"
**Fecha:** [fecha actual]

### Posicionamiento actual
[Resultado del WebSearch: posición orgánica, presencia en Local Pack, competidores]

### SEO Score: XX/100

### Checklist
**Metadatos on-page**
- ✅/⚠️/❌ Title tag con keyword + ciudad
- ...

**Schema JSON-LD**
- ...

**NAP**
- ...

**Contenido local**
- ...

**Configuración técnica**
- ...

### Top 3 acciones para mejorar ranking

1. **[Acción concreta]** — [por qué esto impacta en "barberia valdivia" específicamente]
2. **[Acción concreta]** — [impacto esperado]
3. **[Acción concreta]** — [impacto esperado]
```

Las recomendaciones deben ser específicas y editables en `src/data/site.ts` o `astro.config.mjs` cuando sea posible — indica exactamente qué campo cambiar.
